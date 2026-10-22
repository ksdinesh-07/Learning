class SongNode {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
        this.previous = null;
        this.next = null;
    }
}

class MusicPlaylist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.current_song = null;
        this.size = 0;
    }

    add_song(title, artist) {
        const new_song = new SongNode(title, artist);

        if (this.head === null) {
            this.head = new_song;
            this.tail = new_song;
            this.current_song = new_song;
        } else {
            new_song.previous = this.tail;
            this.tail.next = new_song;
            this.tail = new_song;
        }

        this.size++;
    }

    delete_song(song) {
        if (song === null) {
            return false;
        }

        const next_song = song.next;
        const previous_song = song.previous;

        if (song === this.head) {
            this.head = song.next;
        } else {
            previous_song.next = song.next;
        }

        if (song === this.tail) {
            this.tail = song.previous;
        } else {
            next_song.previous = song.previous;
        }

        if (this.current_song === song) {
            this.current_song = next_song ?? previous_song;
        }

        song.previous = null;
        song.next = null;
        this.size--;

        if (this.size === 0) {
            this.head = null;
            this.tail = null;
            this.current_song = null;
        }

        return true;
    }

    next_song() {
        if (this.current_song === null || this.current_song.next === null) {
            return false;
        }

        this.current_song = this.current_song.next;
        return true;
    }

    previous_song() {
        if (this.current_song === null || this.current_song.previous === null) {
            return false;
        }

        this.current_song = this.current_song.previous;
        return true;
    }

    play_song(song) {
        if (song === null) {
            return false;
        }

        this.current_song = song;
        return true;
    }

    find_song(title) {
        let current_node = this.head;

        while (current_node !== null) {
            if (current_node.title.toLowerCase() === title.toLowerCase()) {
                return current_node;
            }

            current_node = current_node.next;
        }

        return null;
    }

    to_array() {
        const songs = [];
        let current_node = this.head;

        while (current_node !== null) {
            songs.push(current_node);
            current_node = current_node.next;
        }

        return songs;
    }
}

const playlist = new MusicPlaylist();

playlist.add_song("Shape of You", "Ed Sheeran");
playlist.add_song("Believer", "Imagine Dragons");
playlist.add_song("Perfect", "Ed Sheeran");
playlist.add_song("Counting Stars", "OneRepublic");

const playlist_container = document.getElementById("playlist");
const linked_list_view = document.getElementById("linked_list_view");
const current_title = document.getElementById("current_title");
const current_artist = document.getElementById("current_artist");
const player_message = document.getElementById("player_message");
const play_button = document.getElementById("play_button");

let is_playing = false;

function render_playlist() {
    const songs = playlist.to_array();

    playlist_container.innerHTML = "";
    linked_list_view.innerHTML = "";

    document.getElementById("song_count").textContent =
        `${playlist.size} song${playlist.size === 1 ? "" : "s"}`;

    if (songs.length === 0) {
        playlist_container.innerHTML =
            '<p class="empty_message">Your playlist is empty. Add a song to begin.</p>';

        linked_list_view.innerHTML =
            '<p class="empty_message">HEAD → NULL</p>';
    }

    songs.forEach((song, index) => {
        const song_row = document.createElement("div");
        song_row.className = "song_row";

        if (song === playlist.current_song) {
            song_row.classList.add("active");
        }

        const song_number = document.createElement("span");
        song_number.className = "song_number";
        song_number.textContent = index + 1;

        const song_info = document.createElement("div");
        song_info.className = "song_info";

        const title = document.createElement("strong");
        title.textContent = song.title;

        const artist = document.createElement("span");
        artist.textContent = song.artist;

        song_info.append(title, artist);

        const song_actions = document.createElement("div");
        song_actions.className = "song_actions";

        const play_song_button = document.createElement("button");
        play_song_button.textContent = "▶";
        play_song_button.title = "Select song";

        play_song_button.addEventListener("click", () => {
            playlist.play_song(song);
            is_playing = false;
            update_player(`Selected "${song.title}".`);
        });

        const delete_song_button = document.createElement("button");
        delete_song_button.className = "delete_button";
        delete_song_button.textContent = "✕";
        delete_song_button.title = "Delete song";

        delete_song_button.addEventListener("click", () => {
            const was_current = playlist.current_song === song;

            playlist.delete_song(song);

            if (was_current) {
                is_playing = false;
            }

            update_player(`Removed "${song.title}" from the playlist.`);
        });

        song_actions.append(play_song_button, delete_song_button);
        song_row.append(song_number, song_info, song_actions);
        playlist_container.appendChild(song_row);

        const node = document.createElement("div");
        node.className = "list_node";

        if (song === playlist.current_song) {
            node.classList.add("active");
        }

        const node_title = document.createElement("div");
        node_title.className = "node_title";
        node_title.textContent = song.title;

        const node_pointers = document.createElement("div");
        node_pointers.className = "node_pointers";

        const previous = document.createElement("span");
        previous.textContent = song.previous
            ? `← ${song.previous.title}`
            : "← NULL";

        const next = document.createElement("span");
        next.textContent = song.next
            ? `${song.next.title} →`
            : "NULL →";

        node_pointers.append(previous, next);
        node.append(node_title, node_pointers);
        linked_list_view.appendChild(node);

        if (index < songs.length - 1) {
            const arrow = document.createElement("span");
            arrow.className = "list_arrow";
            arrow.textContent = "⇄";
            linked_list_view.appendChild(arrow);
        }
    });

    document.getElementById("head_value").textContent =
        playlist.head?.title ?? "NULL";

    document.getElementById("tail_value").textContent =
        playlist.tail?.title ?? "NULL";

    document.getElementById("current_value").textContent =
        playlist.current_song?.title ?? "NULL";

    document.getElementById("node_count").textContent = playlist.size;

    current_title.textContent =
        playlist.current_song?.title ?? "No song selected";

    current_artist.textContent =
        playlist.current_song?.artist ?? "Add songs to your playlist";

    play_button.textContent = is_playing ? "⏸" : "▶";
}

function update_player(text) {
    player_message.textContent = text;
    render_playlist();
}

document.getElementById("add_song_form").addEventListener("submit", (event) => {
    event.preventDefault();

    const title_input = document.getElementById("song_title");
    const artist_input = document.getElementById("song_artist");

    const title = title_input.value.trim();
    const artist = artist_input.value.trim();

    if (!title || !artist) {
        return;
    }

    playlist.add_song(title, artist);

    title_input.value = "";
    artist_input.value = "";

    update_player(`Added "${title}" to your playlist.`);
});

document.getElementById("next_button").addEventListener("click", () => {
    if (playlist.next_song()) {
        is_playing = false;
        update_player(`Selected "${playlist.current_song.title}".`);
    } else {
        update_player("You are at the last song.");
    }
});

document.getElementById("previous_button").addEventListener("click", () => {
    if (playlist.previous_song()) {
        is_playing = false;
        update_player(`Selected "${playlist.current_song.title}".`);
    } else {
        update_player("You are at the first song.");
    }
});

play_button.addEventListener("click", () => {
    if (playlist.current_song === null) {
        update_player("Add a song before selecting playback.");
        return;
    }

    is_playing = !is_playing;

    update_player(
        is_playing
            ? `Playback simulation started for "${playlist.current_song.title}".`
            : `Playback paused for "${playlist.current_song.title}".`
    );
});

render_playlist();