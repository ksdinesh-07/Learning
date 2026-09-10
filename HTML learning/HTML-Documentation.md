# HTML - Hyper Text Markup Language

## What is HTML?

    HTML Stands for Hyper Text Markup Language(HTML), defines the structure and the meaning of content on a web page.

    It helps us to defines things such as 
        -headings
        -paragraphs
        -images
        -links
        -lists
        -tables
        -forms
        -buttons
        -videos
        -sections

    It focus on the what the content is and how it is structured.

    It is not a Programming Language it is a **Markup Language**.Because it does not have any concepts such as the conditions,loops or functions in the programming like.

    ### HyperText

        HyperText means that can connect to other information through links.

        example:

            <a href="https://www.google.com">Visit Example</a>

            when we click the visit example.The browser takes you to another page.

            here , the idea is 

                Document 1 -----> Document 2 
                            link
    ### Markup Language

        Markup means adding special symbols/tags/labels/information to normal content to give that content meaning or structure.

        example:

            if we write the code like this

                ```Welcome to the page```

            the browser cannnot understand it is a heading,paragraphs or anyother ,so we need markup.

            ```
            <h1>Welcome to the page</h1>

            ```

    ### Language

        A language is a way of communicating information using the rules.

        rules such as:
            -how elements are writte
            -how elements are nested
            -what elements mean
            -what attributes can be used
            -how document is structured
    

    ### example html code:

    ```
     <!DOCTYPE html>  ---> defines this document is an HTML5 document.
        <html>  --->  root element of an HTML page

            <head>  ---> contains the meta information about the html page
                <title>Page Title</title>  --->shows in the browser's title bar or in the page's tab
            </head>

            <body>  ---> container for all the visible contents like headings,paragraphs,tables etc...

            <h1>My First Heading</h1>  ---> heading element
            <p>My first paragraph.</p>  ---> paragraph element

            </body>

        </html> 

    ```

    # What Tech is used before the html

        Before HTML, there wasn't one single technology that was simply replaced by the HTML.

        Time line:

            1960s -1980s
                1.plain text files
                2.SGML
                3.Other document systems
                           V
                       1989 -1991
                           V
                          HTML
                           v
                          WWW
                           v
                        Web browsers

        ### 1. Plain text:
            simplest ways computers stored information was as plain text. 

            example:
                My notes    

                Introduction 

                This document explains Computer networks.

                chapter 1

            The computer knows this is a text,but 
            
            it doesn't know 
                - "My notes" is a title
                - "Introduction" is a heading
                - which is paragraph?
                

        ### 2.SGML - Standard Generalized Markup Language

            SGML was created to provide a standard way of describing the structure of the documents.

            it gives the idea of using markup to describe document structure.

            example:

                document
                ├── title
                ├── section
                │    ├── heading
                │    └── paragraph
                └── section

            HTML was influenced by SGML.

            But unlike the SGML,HTML was created for sharing the documents on the www.

        ### HTML

            In 1989, Tim Berners-Lee proposed the idea of the World Web Web while working at the CERN(European Organization for Nuclear Research).

            In 1990-1991, he had develped the basic pieces needed for the web including:
                -HTML
                -HTTP
                -URL/URI concepts
                -The first web server
                -The first web browser

        ### Problems faced:

            1.Documents were isolated

                Computer 1 ---> Document 1 
                Computer 2 ---> Document 2
                Computer 3 ---> Document 3

            2.Different computer systems used different formats

                System A ---> Format A
                System B ---> Format B
                System C ---> Format C

            3.Information was difficult to connect 

            My notes
            |
            └── References
                    |
                    ├── Document 1
                    ├── Document 2
                    └── Document 3
            The information was related, but there wasn't a universal system where you could simply go to the related document.

            4.Information was difficult to find

            At the time, Organizations had information spread across:
                -different computers
                -different networks
                -different document systems
                -different locations
                -different people

            here the problem was not that information didn't exists.

            The problem was make all this information easily accessible and connected.

        ### Proposed solution:
            ***Web***
                The important idea wasn't just creating the HTML,that was creating the system that allows information on different computers to be connected and accessed easily.

                This led to the fundamental pieces of the Web


                      World Wide Web
                            V
                    HTML    URL    HTTP
                     v       v       v
                Structure  Address  Communication
                    |         |           |
                     ----------------------
                            Web Browser

                HTML 
                    Describes the structure and meaning of a document.

                URL - Uniform Resource Locator

                    Identifies where a resource can be found.

                    a url is basically an address used to locate a resource on a network,especially on a web.

                    example: https://www.amazon.com/products/shoes?id=10

                    URL contains:   
                        https - protocol for communication (TLS)
                        www.amazon.com - host or domain
                        /products/shoes -path
                        ?id=10 - query string,additional parameters to the server

                HTTP - Hyper Text Transfer Protocol

                    Defines how the browser and the server communicate to request and receive the resources.

                    Browser                         Server
                    │                              │
                    │────── HTTP Request ─────────>│
                    │                              │
                    │<───── HTTP Response ─────────│
                    │                              │

                    The browser is usually a client.
                    The computer/service providing the resource is the server.

                    Commonly used Protocol
                        1.HTTP  ---> http://
                        2.HTTPS  ---> https://

                    HTTP
                        Communication uses the HTTP without TLS encryption.

                    HTTPS
                        The communication between the browser and the server is protected by an encrypted TLS connection.

                    TLS - Transport Layer Security
                        TLS is a security protocol that protects data while it travels between your browser and a server.

                        When we log in to a website and send without TLS encrytion,someone can intercept the network traffic can potentially see the information.

                            username: dinesh
                            password: mypassword

                            Browser ────────────────> Server
                                        username
                                        password

                        With TLS 
                            Browser ──> encrypted ──> Server

                        ### what TLS provide
                            TLS mainly provides three important security properties.

                                1.Encryption:
                                    It prevents others from easily reading the data traveling between the browser and the server.

                                    Original :hello World
                                    
                                    Browser (Encrypted) --->server(decrypts it).

                                    Encrypted ---> 8fA$2x#91...kL@7
                                    Decrypts  ---> hello World

                                2.Integrity
                                    TLS helps ensure that the data wasn't modified while traveling.
                                    
                                3.Authentication
                                    TLS helps the browser verify that it is communicating with the intended website/server.

                                    https://amazon.com

                                    The server presents a digital certificate.

                                    The certificate helps establish that the server is authorized for example.com.

                Browser
                    Reads the HTML and present the document to the user.

        ### What happens when we enter the URL

            work flow:

            example URL: https://amazon.com/index.html

            1.Enter the URL
                    v
            2.Browser interprets URL
                    V
            3.DNS finds server IP address
                    V
            4.Browser establishes connection
                    V
            5.Browser sends HTTP request
                    V
            6.Server Processes request
                    V
            7.Server Sends the HTTP response
                    V
            8.Browser receives the HTML
                    V
            9.Browser parses HTML
                    v
            10.Browser builds the page 


        ### What happens when you visit HTTPS?

            example URL --> https://example.com

            process:    

            1. Browser reads URL
                    V
            2. DNS finds server IP
                    V
            3. Connection is established
                    V
            4. TLS handshake happens
                    V
            5. Browser and server establish encryption
                    V
            6. HTTP request is sent through the secure TLS connection
                    V
            7. Server sends HTTP response through TLS
                    V
            8. Browser receives and processes the HTML

        ###             TLS Handshake
                            V
            Browser ─────────────────── Server
                            V
                    Secure connection
                            V
                        HTTP messages

            TLS - Transport Layer Security

            Before securely exchanging normal data,the browser and server need to establish the secure connection.

            The initial process is called the TLS handshake.

            Browser                         Server
                │                              │
                │──── Hello ─────────────────>│
                │                              │
                │<── Certificate ──────────────│
                │                              │
                │──── Key exchange ───────────>│
                │                              │
                │<── Secure communication ─────│
                │                              │
                │════ Encrypted HTTP data ════│

            TLS CERTIFICATE

                A Certificate is a digitally signed document that helps establish the identity of a server/domain.

                URL - amazon.com

                TLS Certificate
                    V
                Trusted Certificate Authority
                    V
                Browser can verify the certificate

                The browser checks the certificate and other TLS information before trusting the connection.

            ### What is SSL?

                -SSL (Secure Socket Layer) used before the TLS.
                -The modern web application used the SSL.
                -Basically SSL replaced by the TLS

        
# How does a browser render a web page?

    We take the example URL - https://amazon.com

    1.URL - https://amazon.com

        Browser needs to find the server associated with that domain.

    2.DNS finds the server

        The browser needs an IP address to communicate with the server.

        for example:
            www.amazon.com
                V
               DNS
                V
            93.232.223.465 (IP addresss )

    3. The Browser establishes the connection

        The browser establish the connection securely using the TLS

        BROWSER ---------------> SERVER
                  TLS handshake

    4.Browser sends an HTTPS request

        The browser asks the server for the resource.

        example:
            GET / HTTP/1.1
            HOST: amazon.com

    5.Server Sends an HTTPS response

        The server responds.

        example:
            HTTP/1.1 200 OK
            Content-Type: text/html

            then it sends:
                <!DOCTYPE html>

                <html>

                    <head>
                        <title>My Website</title>
                    </head>

                    <body>
                        <h1>Hello World</h1>
                        <p>Welcome to my website.</p>
                    </body>

                </html>

            Now the browser has received the HTML.The browser has to understand and process it.

    6.Browser parse the HTML

        The browser has an HTML parser.
        It reads the HTML and understand the elements.

        example:
            <h1>Hello World</h1>
            <p>Welcome to my website.</p>

            The browser recognizes that 
                -<h1> is the heading and 
                -<p> is the paragraph
        
        Then it builds a tree-like structure called DOM (Document Object Model).

        <h1>Hello World</h1>
        <p>Welcome to my website.</p> is just a text received from the server.

        The browser converts that text into objects/nodes that programs can work with.

        HTML Text ===> HTML Parser ===> DOM.

        JavaScript can then interact with the DOM.JS changes the DOM, and the browser can update what you see.


        7.Browser also downloads CSS

            Suppose the HTML contains:
                <link rel="Stylesheet" href="style.css">

            after seeing the style.css the browser sends the requests then the server returns,

            h1 {
                color: blue;
                font-size: 40px;
            }

            p {
                color: gray;
            }

            
            The browser parses this CSS.

            It creates another structure called the CSSOM.
            CSSOM ==> CSS Object Model

            work flow:
                CSS ==> CSS Parser ==> CSSOM

                we now have:

                    HTML ==> DOM
                    CSS ==> CSSOM

        8.Browser combines DOM + CSSOM

            Now the browser knows HTML and CSS

            It combines the relevent information to create what is called the Render Tree

            DOM + CSSOM = Render Tree

            The render tree contains the information needed for displaying the visible page.

        9.Layout

            Now the browser needs to find where should everthing appear on the screen?

            The browser calculate the thingd such as 
                - x positions 
                - y positions
                - width 
                - height
                
            example:
                h1
                x = 100px
                y = 50 px
                width = 300 px
                height = 48 px

            This process is called the Layout.


        10. Paint

            Now the browser knows where everything should be.

            It needs to actually draw the pixels.

            examples:
                Text
                Background
                Borders
                Images
                Shadows
            The browser creates drawing commands for these visual elements.

            This is called the Paint.


        11.Compositing

            Modern browsers often divide the page into differnt layers.

            Those layerscan be processed and combined efficiently.

            example:
                Layer 1 --> Background
                Layer 2 --> Page content
                Layer 3 --> Animation
                Layer 4 --> Fixed Element

            The combining of the layers to produce the final image called compositing.


        12. Displays the final view.

# HTML Versions
    
    1.HTML - 1991:
    
        Tim Berners-Lee created the first version of HTML while developing the WWW at CERN.

        Purpose:
            The original goal was to allow researchers to create documents containing:
                - headings
                -paragraphs
                -lists
                -links
                -references
            and connect those document together using the hyperlinks.

        Example:
            A very simple document

            <h1>My Research</h1>
            <p>This is a very simple para</p>
            <a href="other.html">Read another document</a>

        Use cases:
            Sharing and linking scientific/information documents across the early Web.

    2.HTML 2.0 - 1992:

        HTML 2.O was the first formal HTML specification standardized through the IETF.

        IETF -The Internet Engineering Task Force (IETF) is an open, volunteer-driven standards organization that develops and promotes foundational technical standards for the Internet.

        It is essentially documented and standardized the HTML features that had developed in the early Web.

        Purpose:
            HTML 2.0 includes/support standardized concepts such as 
                - headings
                - paragraphs
                - lists
                - hyperlinks
                - images
                - forms
                - tables-related capabilities were limited.

        Use cases:
            The Web started moving beyond Read documents toward Interact with websites.

            Forms were particularly important ,they allowed users to send information to a server.

    3.HTML 3.2 - 1997

        HTML 3.2 was developed under the W3C (The World Wide Web Consortium).

        By this time ,browsers were becoming more capable and websites were becoming more visually sophisticated,HTML 3.2 standardized many features that browsers had introduced.

        Purpose:
            notable additions/standardizations were:
                -table
                -apples
                -text alignment
                -background colors
                -fonts-related presentation features
                -scripting support
                -improved forms

        use cases:
            Web pages were moving toward visually formatted pages.

        Problem:
            HTML was increasingly being used for the presentation, not just structure.
            
            For example,developers started using the HTML to control things like font,color,alignment,background.

            This eventually contributed to the need for CSS to handle presentation separately.

    4.HTML 4.0 - 1997

        HTML 4.0 was a major step forward.

        it focused more strongly on: 
            -separating structure from presentation
            -scripting
            -accessibility
            -internationalization
            -forms
            -stylesheets
            -frames

        Purpose:
            >CSS integration
                HTML 4 encouraged using the CSS for presentation.

                instead of 

                    <font color='red'>
                        Hello
                    </font>

                we can use  

                    <p class='Important'>
                        Hello
                    </p>
                This was a very important architectural change.

            >HTML 4 also provides stronger support fot the scripting through

                <script>
                    //javascript code
                </script>

                Helped the pages interactive.

            >Frames
                HTML 4 supports frames,Frames allowed a browser window to be divided into multiple documents.

                later frames became obsolete and are no longer part of the modern HTML.

        Use cases:
            Website were becoming the structure,Presentation,Behavior.
            This separation is still fundamental to web development today.

        
    5.HTML - 2014

        HTML5 was a major evolution of HTML.

        It was designed around the need of modern Web applications.

        It introduced or standardized many important features.

        Features:
            >Semantic elements:
                HTML5 introduced semantic elements such as:
                    <header>
                    <nav>
                    <main>
                    <section>
                    <article>
                    <aside>
                    <footer>

            >Audio and Video
                Before HTML5, Playing multimedia often depended on browser plugins such as Flash.HTML 5 introduces the native elements:

                <audio controls>
                    <source src="music.mp3">
                </audio>

                <video controls>
                    <source src="movie.mp4">
                </video>

                problem solved:
                    removes the plugins

            >Canvas 
                HTML5 introduced the <canvas> element.
                    <canvas></canvas>

                Javascript can use it to draw graphics.

                Uses:
                    -games
                    -charts
                    -drawing applications
                    -animations
                    -visualizations

            >SVG 
                Modern HTML supports SVG(Scalable Vector Graphics) for vector graphics.

                Purpose:
                    -icons
                    -diagram
                    -logos
                    -scalable graphics

            >Better forms
                HTML5 introduced many useful form input types.

                example:
                    <input type="email">

                    <input type="date">

                    <input type="number">

                    <input type="range">

                    <input type="search">

                    <input type="url">

                Purpose:
                    It also introduced built-in validation capabilities.

                    like <input type="email" required>
                    This makes that the browser can check whether the user entered something that looks like an email address.

            >New Structural elements
                HTML5 introduced elements such as:
                    <figure>
                    <figcaption>
                    <details>
                    <summary>
                    <mark>
                    <time>

    # What happened after HTML5?

        HTML5 is the latest version of HTML.


# Elements

    The HTML elements is a building block of a web page.

    HTML tags are not case sensitive ( <p> and <P> are same).

    syntax:
        <tagname>Content</tagname>

    example:
        <h1>heading</h1> --> HTML Element
        here:
            <h1> --> is a opening tag
            heading --> is a content
            </h1> --> is a closeing tag


    ## Nested HTML elements

        HTML elements can be nested.

        example:
        <html>   --> root element that defines the whole HTML document

            <body>  --> defines the document's body

                <h1>Heading</h1>
                <p>Paragraph</p>

            </body>

        </html>

    ## Empty HTML Elements

        HTML elements with no contents ,and is an empty elements without a closing tag.

        examples:
            <br> --> sigle line break 
            <hr> --> give a horizontal line
            <img> --> insert the image into the document
            <input> --> get the input using the web based forms

    ## Parent and child elements

        Parent Element: The outer element that contains other elements.
        Child Element: The immediate inner element contained directly inside a parent element.

        <body> --> parent element

            <h1>heading</h1>  -->child element
            <p>Paragraph</p>

        </body>

    ## HTML Tags

        An HTML tag is a hidden keyword enclosed in brackets (< and >) that format and display content

        exapmles:
            <!--...--> --> used for commenting
            <!DOCTYPE> --> used for document type 
            <a> --> used for hyperlink
            <b> --> bold
            <p> --> Paragraph
            <body> --> defines document's body
            <br> --> single line break
            <button> --> creates a clickable button

            <h1> - </h1> --> used to defines the font size
            <h2> - </h2>
            <h3> - </h3>
            <h4> - </h4>
            <h5> - </h5>
            <h6> - </h6>

            <img> --> helps to insert the images
            <div> --> division Tag


    ## Two types of elements

        In HTML , elements are broadly categorized into two types based on how they display in the document layout.

            1.Block level Elements:
                Block level elements start on a new line,occupy the fully available width,stack vertically and can contains both block level and inline elements.

            examples:
                <div>: A general-purpose container for other elements.

                <p>: Defines a paragraph.

                <h1>, <h2>, ..., <h6>: Heading elements of different levels.

                <ol>, <ul>: Ordered and unordered lists.

                <table>: Defines a table.

                <form>: Used for HTML forms to collect user inputs.

                <section>, <article>, <nav>, <aside>, <header>,<footer>: Semantic elements that define areas of a webpage.

                code:

                <!DOCTYPE html>
                    <html>
                    <body>

                        <h1>Student Information</h1>        ---> block

                        <p>Name: Dinesh</p>        ---> block

                        <p>Course: Artificial Intelligence and Data Science</p>        ---> block

                        <div>        ---> block
                            This is a block-level div.
                        </div>

                        <div>        ---> block
                            This is another block-level div.
                        </div>

                    </body>
                    </html>

                    Block-level elements are used to structure the page into separate sections or blocks of content.

            2.Inline Elements:
                Inline elements do not start on a new line,take only the width of their content,and are used within the block-level elements to add or style content.
                
            examples:
            <span>: A general-purpose inline container for phrasing content.
            
            <a>: Creates hyperlinks.

            <img>: Embeds an image.

            <strong>, <b>: Used for strong emphasis and bold text, respectively.

            <em>, <i>: Used for emphasis and italic text, respectively.

            <br>: Inserts a line break within text.

            <input>: Creates interactive controls for forms.

            code:

                <!DOCTYPE html>
                <html>
                    <body>

                        <p>
                            I am learning
                            <strong>HTML</strong> ---> Stays on the same line as the surrounding text.
                            and
                            <em>CSS</em>.
                        </p>

                        <p>
                            This is <b>bold</b> text.
                        </p>

                        <p>
                            This is <i>italic</i> text.
                        </p>

                        <p>
                            Visit <a href="https://www.google.com">Google</a>.
                        </p>

                        <p>
                            This is <mark>highlighted</mark> text.
                        </p>

                        <p>
                            This is <small>small</small> text.
                        </p>

                        <p>
                            Water formula is H<sub>2</sub>O.
                        </p>

                        <p>
                            10<sup>2</sup> = 100.
                        </p>

                    </body>
                </html>


# <meta>

    In HTML, the <meta> element is used to provide information about the web page to the browser and search engines. This information is called metadata.

    <head>
        <meta charset="UTF-8">
    </head>

    <head>
        <meta name="description" content="This is Dinesh's personal profile website.">
    </head>

    Character set encoding is the method used to represent characters (letters, numbers, symbols, emojis, etc.) as bytes that a computer can store and transmit.

    A computer ultimately works with 0s and 1s, so text must be converted into a numerical representation.

        A → 65
        B → 66
        C → 67

    UTF-8 can represent a very large range of characters, including:

        English       → Hello
        Tamil         → வணக்கம்
        Hindi         → नमस्ते
        Chinese       → 你好
        Arabic        → مرحبا
        Emoji         → 😊 🚀 ❤️

        HTML file
        ↓
        Browser receives bytes
        ↓
        Browser asks:
        "What encoding are these bytes using?"
        ↓
        Is encoding declared?
        ├── YES → Use declared encoding
        │
        └── NO → Browser uses other encoding-detection rules
        ↓
        Convert bytes → characters
        ↓
        Display webpage

        example :

            <h1>Hello</h1>
                    ↓
            UTF-8 encoding
                    ↓
            3C 68 31 3E 48 65 6C 6C 6F 3C 2F 68 31 3E
                    ↓
            Browser decodes
                    ↓
            <h1>Hello</h1>
                    ↓
            HTML parser
                    ↓
                "Hello"
                    ↓
            Rendered heading

        Encoding happens before the HTML parser can meaningfully process the characters. The parser needs the bytes to be decoded into characters first.


        <head>
            <meta name="description" content="This is Dinesh's personal profile website.">
        </head>

    1. name="description"

        This tells the browser/search engine what type of metadata you are providing.

        name="description"

        means:
        "The following metadata is a description of this webpage."

    2. content="..."

        This contains the actual description.

        content="This is Dinesh's personal profile website."

        So the complete meaning is:

        <meta name="description" content="This is Dinesh's personal profile website.">

        The description can be used by search engines when displaying your page in search results.


# Attributes

    They provide additional information about the HTML elements.
     
    They specify only in the start tag.

    They must be in name='value'

    syntax:

    <tag attribute="value">Content</tag>


    exapmles:

        > href attribute

            <a href='https://www.amazon.com'>Visit Amazon</a>

            here,href is an attribute

        >src attribute

            <img src='sample_image.jpg'> -->src helps to insert the images

            <img src='sample_image.jpg' width-'500 height='600'> 
            
            here,the <img> tag should also contains the width and height

        >alt attribute

            alt attribute for the <img> tag specifies an alternative text for an image.

            <img src='smaple.jpg' alt="bike on road">
        
        >Style attribute

            used to add style to an element,such as color,font,size and more.

            <p style="color:red;">This is a red Paragrap.</p>

        >lang attribute

            lang attribute always include inside the <html> tag to declare the language of the web page.

            <!DOCTYPE html>
            <html lang='en'>  --> to mention the language type.

        >title attribute

            The title attribute defines some extra information about an element.

            the value of the attribute displayed as a tooltip when you mouse over the element.

            <p title='iam a car'>BMW</p> 

            
        
    ## Ways to specify the URL in src attribute

    1.Absolute URL
        links to an external image that is hosted on another website.

    2.Relative URL
        links to an image that is hosted within the website

    ## More attributes

    1.Basic attributes
        >id
        >class
        >style
        >title
        >hidden

        example:
            <p id='intro' class='text' title='Introduction'>Hello</p>

    B.Link attributes
        >href
        >target
        >rel
        >download

        example:
            <a href='about.html' target='_blank'>About </a>

    C.Image attributes
        >src
        >alt
        >width
        >height
        >loading 

        example:
            <img src='profile.jpg' alt='Profile photo' width="200">

# Headings

    HTML headings are titles or the subtitles that you want to display in the web.

    ## Advantages:
        > Search engines use the headings to index the structure and content of your web pages.
        > Important to show the documentation structure.

    examples:
        h1 --> Main title
        h2 --> Major title
        h3 --> sub-sections
        h4 --> Sub-subsection
        h5 --> Smaller subsection
        h6 --> Lowest heading level

    code:

        <h1>My Personal Profile</h1>
        <h2>About Me</h2>
        <h3>Programming Languages</h3>
        <h4>Java</h4>
        <h5>Python Basics</h5>
        <p>Variables, loops and functions.</p>
        <h5>Advanced Topics</h5>
        <h6>Decorators</h6>
        <p>Decorators allow us to modify the behavior of functions.</p>

    ## Bigger heading 
        > Heading tag has a default size. we can also specify the size.
        > With the help of the style attribute using the css font size property.

        code:   

            <h1 style="font-size:60px;" >Heading 1 </h1>

# Paragraphs

    A paragraph always starts on a new line ,and usually a block of text.

    Denoted by the <p>.

    Automatically removes the extra spaces.

    <p> --> Opening tag
    This is a paragraph.  --> Content
    </p>  --> Closing tag

    <p>
        This paragraph contains a lot of lines in the source code, but the browser ignores it.
    </p>

    ## HTML Horizontal Rules

        The <hr> tag defines a thematic break,
        used to display as a horizontal rule.

        It is used to seperate content in an HTML page.

        code:

            <h1>This is project 1</h1>
            <p>This is project description.</p>
            <hr>

            <h2>This is project 2</h2>
            <p>This is project description.</p>
            <hr> 



    ## HTML Line Break

        The <br> element defines a line break.

        It is used when we need a line break (a new line) without starting a new paragraph.

        example:

            <p> This is <br> a paragraph <br> With line breaks.</p>


    ## <pre> Element 

        Defines pre-formatted text

        The HTML <pre> element is displayed in a fixed-width font, and it preserves both spaces and the line breaks.

        <pre>
            My Bonnie lies over the ocean.
            My Bonnie lies over the sea.
            My Bonnie lies over the ocean.
            Oh, bring back my Bonnie to me.
        </pre>


    ## Special Characters

        For the display of the special character we need to use the HTML entities:

        example:
                > &lt;     shows --<
                > &gt;     shows -->
                > &amp;     shows --&
                > &quot;     shows --"
                > &nbsp;     non-breaking-space

        use case:

            <h2>Product Information</h2>

            <p>Storage:500 &nbsp;GB</p>

            <p>Price:$8nbsp;499</p>

            <p>Company : HC &amp; HC </p>

            <p>Requirement: Age &gt; 18</p>

            <h2>HTML Code</h2>

            <p>
                &lt;h1&gt;Hello World&lt;/h1&gt;
            </p>

            <p>
                class=&quot;container&quot;
            </p>

# HTML Styles

    The HTML style attribute is used to add styles to the elements like color,font,size and more. 

    example: 
        Changing the color,
        Changing the font,
        changing the size etc


    ## HTML Style attribute

        style attribute helps to style the HTML elements 

        syntax:

            <tagname style="property:value;">

            here both the property and the values are css value.

    ## Background color
        
        <body style="background-color:black;">

            <h1 style='background-color:blue' >This is a heading</h1>

            <p style='background-color:white' >This is a paragraph.</p>

        </body>

    ## Text color

        using the style attribute we can change the text color for an HTML element

        <h1 style='color:blue'>This is a heading</h1>

        <p style='color:white'>This is a paragraph.</p>

    ## Fonts 

        The css font-family property defines the font in the web page

        <h1 style="font-family:verdana;">This is heading</h1>
        
        <p style="font-family:courier;">This is a paragraph.</p> 

    ## Text size

        This helps us to defines the font size for an HTML elements.

        <h1 style="font-size:300%;">This is a heading</h1>

        <p style="font-size:160%;">This is a paragraph.</p> 

    ## Text Allignment

        This property defines the horizontal text alignment for an HTML element.

        <h1 style="text-align:center;">Centered Heading</h1>

        <p style="text-align:center;">Centered paragraph.</p> 

# HTML Text Formatting

    HTML gives several elements to format.we can make text bold,italic,highlighted,smaller,deleted,inserted, or displayed as superscript and the superscript.

    example
        <p> This is <b>bold text</b>.</p> --> makes them bold

        <p>Please read the <strong>important instructions</strong>.</p>

        <p>This is <i>italic text</i>.</p>

        
    ## Formatting Elements are 
        <b> --> Bold text
        <strong> --> Important text
        <i> --> Italic text
        <em> --> Emphasized text
        <mark> --> Marked text
        <small> --> Smaller text
        <del> --> Deleted text
        <ins> --> Inserted text
        <sub> --> Subscript text
        <sup> --> Superscript text

    codes:

        1.BOLD Text

        <p>
            My favorite programming language is <b>Python</b>.
        </p>

        use case:
            Use it when you want to visually draw attention to a word without giving it special importance.


        2.STRONG Text

        <p>
            <strong>Warning:</strong> Do not share your password.
        </p>

        use case:
            Warnings, important instructions, critical information

        3.Italic Text

        <p>
            The scientific name is <i>Homo sapiens</i>.
        </p>     

        use case:
            Common uses include:
                -Scientific names
                -Foreign words
                -Technical terms
                -Thoughts or terminology that is -conventionally italicized

        4. Emphasized text

        <p>
            You <em>must</em> complete the assignment today.
        </p>

        use case:
            The emphasis changes the meaning of the sentence.

        5. Mark

        <p>
            You searched for <mark>HTML</mark>.
        </p>

        use cases:
            Imagine Google-like search results.

        6.small 

            <p>
                This product is available for ₹499.
                <small>Terms and conditions apply.</small>
            </p>

        use case:
            copyright
            legal information
            reminder

        7.del

            <p>
                Original price:
                <del>₹999</del>
            </p>

            <p>
                New price: ₹699
            </p>
        
        use case:
            commonly used in the pricing.

        8.inserted text

            <p>
                The project deadline is
                <del>Monday</del>
                <ins>Wednesday</ins>.
            </p>

        use case:
            showing changes to a policy.

        9.Subscript

            <p>
                The chemical equation of the water is H<sub>2</sub>O
            </p>

            <p>CO<sub>2</sub></p>
            <p>H<sub>2</sub>O</p>
            <p>O<sub>2</sub></p>

            <p>a<sub>1</sub></p>
            <p>a<sub>2</sub></p>
            <p>a<sub>3</sub></p>

        use case:
            used in the chemical formulas.
            used in the mathematical notaions

        10.superscript

            <p>
                The power of 10<sup>2</sup> = 100
            </p>

            <p>
                HTML was created for the Web.<sup>1</sup>
            </p>

        use cases:
            Maths
            units
            Footnotes

# Quotation and citation Elements

    HTML gives a special elements for displaying quotation,references,abbreviations and information about the source of content.

    example:

        > For display a long quotation taken from another source ---> <blockquote>

            <blockquote cite="https://example.com/article">
                Learning never stops. Every day is an opportunity to learn something new.
            </blockquote>

        > For specify the source we use <cite> attribute. like name of the work or the work title.

            <p><cite>This New Car</cite> was designed by Edvard.</p>
        
        > For short quotation we will use the <q>.

            <p>My teacher said <q>Practice makes perfect.</q></p>

        >For Abbreviations we will use the <abbr> like WHO -->World Health Organization.

            <p>The <abbr title="Hyper Text Markup Language">HTML</abbr> used to create web application.</p>

        >For mentioning any address we will use the <address> for contact information like email address,URL,Physical address,phone number ,document owner of the artical.

        syntax:
            <address>
                Contact information
            </address>

            <address>
                Written by Dinesh KS<br>
                Email: dinesh@gmail.com<br>
                Phone: +91 98765 43210<br>
                Erode, Tamil Nadu, India
            </address>

        > For forcing the direction in which the text need to be displayed. --> <bdo> Bi-Directional Override.

            dir="ltr" means Left to Right
            dir="rtl" means Right to Left

            example:

                <bdo dir="rtl">
                    This text will be displayed from right to left.
                </bdo>

                <bdo dir="lft">
                    This text will be displayed from left to right.
                </bdo>

# HTML Comments 
    
    HTML comments are not displayed in the browser,but they can help the developer to read and understand the source code.

    ## HTML Comment Tag

        <!--comments-->

    > Comments helps us to place notifications and reminders in code.

    > They can hide the content Temporarily.

    > We can also add more than one line as comment.

    ## Hide inline Content

        Comments can also able to hide the middle parts of the code.

        <p> This is a <!--car--> .</p>
    
     
# Favicon

    A favicon is a small icon associated with a website or the web page.

    Favourite + Icon = Favicon

    It is commonly displayed in the browser tab next to the page title.

    ## use case:
        -It helps to identify a website quickly.

    It appears in places such as
        Browser tabs
        Bookmarks
        Browser history
        Home-screen shortcuts
        Other browser UI areas
    
    favicon is normally added inside the <head> section of an HTML document.

    Format:
        ICO (Icon File Format): Made by Microsoft for Windows desktop icons and website favicons. It can pack multiple sizes and color depths into a single file so icons look sharp at any scale.
        
        
        PNG (Portable Network Graphics): A pixel-based, lossless format that supports full transparency (alpha channels). It is great for web graphics, logos, and screenshots, but file sizes are larger than JPEGs.
        
        
        GIF (Graphics Interchange Format): A pixel-based, lossless format limited to 256 colors. It supports simple animations and basic transparency, but creates large files for modern use.
        
        
        JPEG / JPG (Joint Photographic Experts Group): A pixel-based, lossy format that handles millions of colors. It shrinks photograph file sizes very well, but does not support transparency and loses quality when saved repeatedly.
        
        
        SVG (Scalable Vector Graphics): A code-based vector format built on XML equations rather than pixels. It scales infinitely to any size without losing quality and has the smallest file size for flat shapes and logos.

    example:

    <!DOCTYPE html> 
    <html> 

        <head> 
            <title>My Personal Profile</title> <link rel="icon" href="favicon.ico">
        </head> 
        
        <body> 
            <h1>My Personal Profile</h1> 
        </body> 
    </html>

    here,
        <link rel="icon" href="favicon.ico">

        <link> is an HTML element used to establish a relationship between the current HTML document and an externa; resource.

        rel="icon" is an attribute

        href="favicon.ico" find the file named favicon.ico.

        it should be placed inside <head> tag.

        <head> 
            <title>My Personal Profile</title> <link rel="icon" href="favicon.ico">
        </head> 

    common Favicon file formats
        Favicons can be provided in several image formats.such as
            .ico
            .png
            .svg

# HTML Colors
    HTML itself provides the structure,while css color properties control how that content looks.

    There are several ways to specify colors:
        1.Color name
        2.RGB
        3.HRX
        4.HSL
        5.RGBA
        6.HSLA

    1.Color names
        The simplest method is using a predefined color name.

        example:

            we can change the text color

            <h2 style="color: blue;">
                About Me
            </h2>

            we can also change the background

            <p style="background-color: lightgray;">
                I am learning HTML.
            </p>

    2.RGB Colors
        RGB Stands for Red Green Blue.

        Each parameter (red, green, and blue) defines the intensity of the color with a value between 0 and 255.

        This means that there are 256 x 256 x 256 = 16777216 possible colors.

        <p style="color: rgb(255, 0, 0);">
            This is red text.
        </p>

        here,
            Red - 255
            Green - 0
            Blue - 0

        For example, rgb(255, 0, 0) is displayed as red, because red is set to its highest value (255), and the other two (green and blue) are set to 0.

        #Shades of gray:
            Shads of gray are often defined using the equal values for all three parameters.

            example
                rgb(60,60,60)

        3.HEX Colors
            HEX means hexadecimal color notation.

            It starts with # and normally contains six hexadecimal characters.

            <p style="color: #ff0000;">
                This is red text.
            </p>

            structure is #RRGGBB
                RR-Red
                GG-Green
                BB-Blue

            examples
                #ff0000 -> Red
                #00ff00 -> Green
                #0000ff -> Blue
                #000000 -> Black
                #ffffff -> White

            code:
                <h1 style="color: #1e3a8a;">
                    My Personal Profile
                </h1>

        4.HSL Colors
            HSL means 
                H -> Hue (degere on the color wheel from 0 - 360,0 is red,120 is green and 240 is blue).

                S -> Saturation (intensity, 0 means shade of gray,and 100 is full color)  is percentage value %.

                L -> Lightness (0% is black and 100% is white)  is percentage value %
                
            <p style="color: hsl(0, 100%, 50%);">
                This is red text.
            </p>
        
            <h2 style="color: hsl(120, 60%, 30%)">
                My Skills
            </h2>

        5.Transparency with RGBA
            RGBA adds an Alpha value to RGB.

            Alpha controls Transparency

                R -> Red
                G -> Green
                B -> Blue
                A -> Alphs

            0 - completely transparent 
            1 - completely opaque

            example:

                rgba(0, 0, 255, 0) -> invisible

                rgba(0, 0, 255, 0.5) -> 50% transparent

                rgba(0,0,255,1) -> fully visible

            <p style="background-color: rgba(0, 0, 255, 0.5);">
                Semi-transparent blue background.
            </p>

# Basic under standing of the color 

    For what purpose we have used different methods?

    A computer screen creates colors using three basic light components:
        > Red
        > Green
        > Blue
    This is called the RGB color model.

    Different color formats provide different ways to define and control the same color; RGB/HEX are convenient for exact colors, RGBA adds transparency, and HSL makes color adjustments easier.

    COLOR Name

        color: red;
        You only have predefined names.

    Disadvantages:
        For example, if you want a very specific shade:
        dark blue → ?
        professional blue → ?
        company brand blue → ?

    HEX - extra color
        color : #FF0000;
        represent red

        Why use it? 
            Because you can specify an exact color.

        Disadvantage: 
            It's difficult to understand by looking at it.

    RGB - Red  , Green and Blue
        color:  rgb(255,0,0)

        Why use RGB?
            When you want to directly control the amount of red, green and blue.

        Disadvantage: 
            Making a color lighter/darker isn't intuitive.

    RGBA - RGB + Transparency
        R - Red
        G - Green
        B - Blue
        A - Alpha (transparency)

        color: rgba(255, 0, 0, 0.5);

        Transparency Control
            1   - completely visible
            0.5 - semi-transparent
            0   - completely transparent

        Disadvantage: 
            More values make it slightly harder to read.

            <div style="background-color: rgba(255, 0, 0, 0.5);">
                Hello
            </div>
            
            this gives the semi-transparent red

    HSL - Hue, Saturation and Lightness
            H → Hue
            S → Saturation
            L → Lightness

        color: hsl(0, 100%, 50%);

        HUE -Which color?
            0°   → Red
            120° → Green
            240° → Blue

        Saturation - How strong the color is ?
            100% → strong color
            0%   → gray 

        Lightness - How light/dark ?
            0%   → black
            50%  → normal
            100% → white

        Hence, hsl(0, 100%, 50%) means ==> Red + full color strength + normal lightness

# HTML Styles - CSS

    CSS stands for th Cascade Style Sheet.CSS is a language used to control the presentation and appearance of HTML elements

    HTML defines what the content is; CSS defines how that content looks.

    <h1>My Profile</h1>
    <p>I am a developer.</p>

    here HTML says:
        <h1> - This is a heading.
        <p> - This is a paragraph.

    But the CSS can say:
        Make the heading blue.
        Make the paragraph larger.
        Add spacing.
        Change the font.
        Add a background.
        Align the content.

    Without CSS:
        <h1>My Profile</h1>
        <p>I am a developer.</p>
    
    With CSS:
        h1 {
            color: blue;
            font-size: 40px;
        }

        p {
            color: gray;
            font-size: 18px;
        }

    ## Cascading:
        Cascading means that when multiple CSS rules apply to the same element,the browser needs a way to determine which style need to apply.

        example:

            <p class="text">
                Hello
            </p>

            p {
                color: blue;
            }

            .text {
                color: red;
            }

            Both rules apply to the <p>.The browser uses CSS's rules for deciding which declaration has the priority

            Here, .text has higher specificity than p, 
            so:Final color → RED

            p {
                color: blue;
            }

            p {
                color: red;
            }

            Both have the same specificity.

            here,the second rule wins because it comes later:

                blue
                ↓
                red  ==> apply

                This is part of the CSS Cascade.

    CSS can be added to HTML documents in 3 ways:
        > Inline using the style attribute inside HTML elements
        > Internal - using a <style> element in the <head> section
        > External - using a <link> element to link to an external CSS file

    The most common way to add CSS, is to keep the styles in external CSS files.

    ## Inline CSS:
        An inline CSS is used to apply a unique style to a single HTML element.CSS can be written directly inside an HTML element using the style attribute.

        example :   
            <h1 style="color: blue;"> 
                My Profile
            </h1>

        Use case:
            Inline CSS can be useful when you need to apply a very specific style to one particular element.

        Disadvantage:
            Imagine you have 100 paragraphs, you're repeating the same CSS.If you later want blue → green, you have to change many places.

        So inline CSS is generally not preferred for large projects.

    ## Internal CSS:
        Instead of putting CSS directly on an element, you can put CSS inside a <style> element.

        example code:
            Usually it goes inside <head>


        <!DOCTYPE html>
        <html>

            <head>

                <style>                ===> Internal CSS added using the <style> 
                    h1 {
                        color: blue;
                    }

                    p {
                        color: gray;
                    }
                </style>

            </head>

            <body>

                <h1>My Profile</h1>

                <p>I am learning HTML and CSS.</p>

            </body>

        </html>

        Working:

            h1 {
                color: blue;
            }

            here,
                 h1 ---> is a Selector,tells CSS to "Which HTML element should i style?"

                 color ---> is a Property,tells CSS to"Which aspect of the element should i change?"

                 blue ---> is a value,tells CSS to "What should that property become?"

            CSS Declaration:    
                color: blue; is called the declaration.
                It consists of property:value

                example:
                    color: blue;
                    font-size: 30px;
                    background-color: yellow; 

                    each is a declaration.

    ## External CSS:
        For real projects,this is usually the most important method.
        An external style sheet is used to define the style for many HTML pages.

        To use an external style sheet, add a link to it in the <head> section of each HTML page.

        <!DOCTYPE html>
        <html>

            <head>
                <link rel="stylesheet" href="style.css">  --->External css is added in style.css
            </head>

            <body>

                <h1>My Profile</h1>

                <p>I am learning web development.</p>

            </body>

        </html>

        The style.css contains the actual css content;  

            h1 {
                color: blue;
                font-size: 40px;
            }

            p {
                color: gray;
                font-size: 18px;
            }

        
        The HTML connects to CSS using the <link rel="stylesheet" href="style.css">.

        ## Why external CSS is preferred?

            Imagine your website has:
                index.html
                about.html
                projects.html
                contact.html

            All four pages need the same design.Instead of writing CSS in every HTML file, you can use

                <link rel="stylesheet" href="style.css">.

            and connect it to all pages.

                        style.css
                        /   |   \
                       /    |    \
                      ↓     ↓     ↓
                    index   about   contact
                    .html   .html   .html
            
            Now if we change :
            
                body {
                    background-color: lightgray;
                }

                the change ca apply to all pages using the stylesheet.

            Main Advantages:
                > Reusability 
                > Maintainability

        ## CSS Selectors:
            A selector tells CSS which HTML elements to target.

            There are several important selectors:
                1.Element Selector:
                    It targets the element.

                    example:
                        p {
                            color: blue;
                        }

                        in this case it targets all the <p> elements.
                
                2.Class Selector:
                    It targets the Class

                    example:

                        <p class="description">
                            I am a developer.
                        </p>

                        .description {
                            color: green;
                        }

                        . --> means class.

                        We can reuse the classes.

                        <p class="description">
                            First paragraph
                        </p>

                        <p class="description">
                            Second paragraph
                        </p>

                        both the paragraph get the same style.

                    use case:
                        used when multiple elements can share the same styling.

                3.ID Selector:
                    It targets the id.

                    example:

                        <h1 id="profile-title">
                            My Profile
                        </h1>

                        #profile-title {
                            color: blue;
                        }

                        The # means ID.

                    use cases:  
                        Used to identify a particular element.

        ## CSS Comments:    
            We can write the comments in CSS:

            /* This changes the heading color */
            h1 {
                color: blue;
            }

        ## Multiple CSS properties:
            We can use more than one property 
                h1 {
                    color: blue;
                    font-size: 40px;
                    text-align: center;
                    background-color: lightgray;
                }

## HTML Links
    An HTML link allows a user to navigate from one location to another.

    HTML links are hyperlinks.

    For Example:
        One webpage ---> another Webpage
        One page ---> another page in your project
        Page ---> specific section of the same page
        page ---> email address
        page ---> phone number
        page ---> downloadable file
        page ---> external website


    The HTML element used for links is the anchor element.

    <a>...</a>

    code
        <a href="https://www.google.com">
            Visit Google
        </a>

        <a>                         → Anchor element
        href                        → Attribute
        "https://www.google.com"    → Destination
        Visit Google                → Visible/clickable text
        </a>                        → Closing tag

        When the user clicks it, the browser navigates to Google.
        href means Hypertext Reference.

    HTML Links - Target Attribute

        By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link.

        The target attribute specifies where to open the linked document.

        The target attribute can have one of the following values:

            _self - Default. Opens the document in the same window/tab as it was clicked
            _blank - Opens the document in a new window or tab
            _parent - Opens the document in the parent frame
            _top - Opens the document in the full body of the window


    ## How the Browser Understands a Link
        If we take 

            <a href="https://google.com">
                Google
            </a>

        The browser's HTML parser look 

            a element
            │
            ├── href = "https://google.com"
            │
            └── text = "Google"

        The browser creates an internal representation of that element.

        When the user clicks Google, the browser uses the value of href as the navigation destination.

        HTML
        ↓
        HTML Parser
        ↓
        <a href="https://google.com">
        ↓
        Browser understands:
        "This is a link"
        ↓
        User clicks
        ↓
        Browser navigates to destination

    Links are used for navigate to a resource or location.

    example:
        <a href="about.html">
            About Me
        </a>

        Here it goes to about.html

        <a href="mailto:dinesh@gmail.com">
            Send Email
        </a>

        <a href="tel:+918144004841">
            Call
        </a>

        <a href="sms:+918144004841">
            Text Us
        </a>

        <a href="https://wa.me/918144004841">
            Whatsapp
        </a>

    ## Absolute URLs
            An absolute URL is the complete, unique address of a specific webpage or file. 
            
        example:
            Think of it like a mailing address that includes the country, city, street, and house number—it will find the correct destination no matter where the letter is sent from.

        <a href="https://github.com">
            GitHub
        </a>        

        https://www.github.com/page
        │       │
        │       └── domain
        │
        └── protocol

        These are called absolute URLs because the browser has the complete destination.

        ## When to use it: 
            You must use an absolute URL whenever you are linking to an external website that is completely separate from your own domain.

        example:
            Think of it like giving directions to someone already inside your house: instead of giving them your full street address, you just say, "Go down the hall and turn left.


    ## Relative  URLs
        A relative URL points to something within or relative to your own project.

        <h2>Relative URLs</h2>
        <p>
            <a href="/css/default.asp">
                CSS Tutorial
            </a>
        </p>

        personal-profile/
        │
        ├── index.html
        ├── about.html
        ├── projects.html
        ├── contact.html
        │
        └── style.css

        In the index.html 

            <a href="about.html">
                About Me
            </a>

            <a href="projects.html">
                My Projects
            </a>

            <a href="contact.html">
                Contact Me
            </a>

        The browser looks for about.html relative to the current page.

        ## When to use it: 
            Use relative URLs for building your own website. They make your site load slightly faster and ensure that if you ever change your domain name.

    ## Linking an Image
        An image can also be made clickable.

        example:
            <a href="about.html">
                <img src="sample images/profile.png" alt="My profile">
            </a>

            Now clicking the image takes the user to about.html.

            This is commonly used for 
                logos
                profile pictures
                product images
                thumbnails
                cards

    ## Target Attribute in HTML Links.
        The target attribute is used with the <a> element to specify where the linked page / resource should be opened.

        Example:
            <a href="https://example.com" target="_blank">
                Visit Example
            </a>

            <a>          --> Anchor element
            href         --> Where to go
            target       --> Where/how to open it

        1. target='_self'
            This is the default behaviour.

            <a href="about.html" target="_self">
                About Me
            </a>

            The linked page opens in the current tab/window.

            We can simple use:

                <a href="about.html">
                    About Me
                </a>

                because _self is the default.

        2. target='_blank'
            This opens the link in a new browsing context, normally a new tab.

            <a href="https://www.google.com" target="_blank">
                Google
            </a>

            use case:
                This is commonly useful for external websites.

                For example, in your portfolio.

                <a href="https://github.com" target="_blank" rel="noopener">
                    GitHub
                </a>

            What is noopener?
                When intentionally using the _blank, it is common to add rel="noopener".

                This prevents the newly opened page from accessing the opener through window.opener.

                Without rel="noopener", the new tab gains access to your original tab via a JavaScript property called window.opener. This creates a severe security vulnerability known as reverse tab-nabbing.

                In recent versions of all major browsers (Chrome, Firefox, Safari, and Edge), target="_blank" automatically implies rel="noopener" by default.

        3. target="_parent"
            This is mainly relevant when the link is inside an <iframe>.

            <a href="about.html" target="_parent">
                About Me
            </a>

            It tells the browser to open the destination in the parent browsing context.

            For normal pages without frames / i frames ,we cannot notice a difference.

            esample:
                index.html

                <!DOCTYPE html>
                <html>
                <head>
                    <title>Parent Example</title>
                </head>

                <body>

                    <h1>Index Page</h1>

                    <iframe
                        src="page.html"
                        width="500"
                        height="200">
                    </iframe>

                </body>
                </html>

                page.html

                <!DOCTYPE html>
                <html>
                <body>

                    <h2>This is inside the iframe</h2>

                    <a href="about.html" target="_parent">
                        Open About Page
                    </a>

                </body>
                </html>

                when we click open about page,open the link in the parent browsing context of the iframe.

        4. target='_top':
            target="_top" specifies that the linked page should be opened in the top-level browsing context, replacing the entire current frame/iframe structure.

            <a href="about.html" target="_top">
                Open About Page
            </a>

        example:
            index.html

            <!DOCTYPE html>
            <html>
            <head>
                <title>Top Example</title>
            </head>

            <body>

                <h1>Index Page</h1>

                <iframe
                    src="page.html"
                    width="500"
                    height="200">
                </iframe>

            </body>
            </html>

            page.html

            <!DOCTYPE html>
            <html>
            <body>

                <h2>This is inside the iframe</h2>

                <a href="about.html" target="_top">
                    Open About Page
                </a>

            </body>
            </html>

        when we open the link in the top-level browsing context,removing the iframe context.

    ## Link Button:      

            A link button is a hyperlink (<a>) that is styled using CSS to look like a button while still performing the navigation behavior of a link.

            example:

                <a href="about.html">
                    About Me
                </a>

                <style>
                    a:link, a:visited {
                    background-color: #f44336;
                    color: white;
                    padding: 15px 25px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    }

                    a:hover, a:active {
                    background-color: red;
                    }
                </style> 

    ## Creating Bookmarks

        A bookmark in HTML is a specific location within a webpage that can be linked to using an element's id, allowing users to jump directly to that location.

        example:
            <body id="top">

            <a href="#top">
                Back to Top
            </a>

# Images:
    HTML images are used to display images on a webpage using the <img> element.

    <img src="image.jpg" alt="Description of image">

        here src specifies the location/path of the image that the browser should load.

        <img>
            |
            └── src → Where is the image?

        alt provides alternative text describing the image.

        uses:
            -the image cannot be loaded
            -a screen reader is reading the page
            -the user cannot see the image
    
    We can also specify the width and the height

        <img
            src="profile.png"
            alt="Profile photo"
            width="200"
            height="200"
        >

    we can also use the absolute URL.

        <img
            src="https://linkedin.com/images/profile.png"
            alt="Profile photo"
        >

    we can also add the style 

        <img src="sample images/WhatsApp Image 2026-09-05 at 8.07.30 PM.jpeg"     
            alt="Profile Image" 
            width="200" 
            height="200"
            style="border-radius: 50%;">

    we can also add the animated GIF'S 

            <img src="sample images/coding.gif" 
                alt="Profile Image" 
                width="500 px" 
                height="100 px">

    NOTE:
        In HTML

        <img src="coding.gif" width="500" height="100">

        This works,: In HTML tags, the width and height boxes are specifically made to count in pixels. The browser already knows this, so you do not need to type px.

        but in css:

            img {
                width: 500;   /*The browser ignores this */
                height: 100;  /*Broken! The browser ignores this */
            }

        It fails,CSS is used for styling all kinds of things. It needs to know if you mean pixels (px), percentages (%), or screen size (vw). Because you didn't label it, the browser gets confused and throws the rule away.

    ## Image Maps:
        An image map allows you to make different areas of a single image clickable, with each area linking to a different destination.

        example:
            <img
                src="sampleimage.jpg"
                alt="sample image"
                usemap="#profilemap"    ---> connetion is made by #profilemap
            >

            <map name="profilemap">
                <area
                    shape='rect'   
                    coords="0,0,100,100"
                    href="about.html"
                    alt="about me"
                >
            </map>

            shape ---> Defines the shape of the clickable area

                common value:
                    rect   --->  rectangle
                    circle  ---> circle
                    poly    ---> polygon
                    default ---> entire image

            coords ---> Defines the coordinates of the clickable area.

                for a rectangle values are:
                    coords="x1,y1,x2,y2"

                    coords="0,0,100,100" ---> means rectangle

                    the coordinates 0,0 is one for the x-axis and one for the y-axis.

                    the coordinates 100,100 is located 100 px from the left margin and 350 px from the top.

                    simply (0,0) ---> Top Left
                    Bottom-right ---> Bottom right

                for a circle values are:

                    <area
                        shape="circle"
                        coords="x,y,r"
                        href="about.html"
                        alt="About Me"
                    >

                    Center X = 150
                    Center Y = 100
                    Radius   = 50 pixels

                    The three coordinates are :
                        coords="x,y,r"
                                │ │ │
                                │ │ └── radius
                                │ └──── Y coordinate of center
                                └────── X coordinate of center

                for a polygon values are:

                    <area
                        shape="poly"
                        coords="x1,y1,x2,y2,x3,y3,..."
                        href="about.html"
                        alt="About Me"
                    >

                    <area
                        shape="poly"
                        coords="100,50,200,50,250,150,150,200,50,150"
                        href="about.html"
                        alt="About Me"
                    >

                    a polygon uses the pairs of coordinates:

                        Point 1 → (50,50)
                        Point 2 → (150,30)
                        Point 3 → (200,100)
                        Point 4 → (100,150)

                                 (100,50)──────(200,50)
                                    ╲              ╱
                                     ╲            ╱
                                       (250,150)
                                     ╱        ╲
                                    ╱          ╲
                            (50,150)────────(150,200)

                for a default values are:
                    In an HTML image map, shape="default" makes the entire image a single clickable area.

                    <area
                        shape="default"
                        href="about.html"
                        alt="About Me"
                    >

                    IT do not need coords when using default, because the entire image is the clickable area.

                    <img
                        src="sample images/profile.png"
                        alt="Profile"
                        usemap="#profileMap"
                    >

                    <map name="profileMap">
                        <area
                            shape="default"
                            href="about.html"
                            alt="About Me"
                        >
                    </map>

                    Now clicking anywhere on the image will open about.html.
## HTML Picture <picture> element
    
    The HTML <picture> element is used to provide multiple image sources for the same image, allowing the browser to choose the most appropriate one based on conditions such as screen size, device characteristics, or supported image format.

    The <picture> element allows developers to provide multiple versions of an image so that the browser can choose the most suitable image to display.

    example:
        <picture>
            <source srcset="image-large.jpg" media="(min-width: 800px)">
            <source srcset="image-small.jpg" media="(max-width: 799px)">

            <img src="image-small.jpg" alt="Profile image">
        </picture>

        <picture>
            │
            ├── <source> → Large-screen image
            │
            ├── <source> → Small-screen image
            │
            └── <img>    → Fallback image
        </picture>

        for the desktop we use the large image
        for the mobile we use the small image

        The browser evaluates the <source> element and select an appropriate image.

        <img> ---> Displays an image
            <img src="profile.png" alt="Profile">

        <picture> ---> Provides multiple possible image sources with an <img> fallback.
            <picture>
                <source srcset="profile-large.png">
                <img src="profile.png" alt="Profile">
            </picture>

        Why we use the picture element?
            There are two main purpose:

                1.Bandwidth
                    If you have a small screen or device , it is not necessary to load a large image file. The browser will use the first <source> element with matching attribute values, and ignore any of the following elements.

                2. Format Support
                    Some browsers or devices may not support all image formats. By using the <picture> element, you can add images of all formats, and the browser will use the first format it recognizes, and ignore any of the following elements. 

            
# HTML Tables

        HTML tables allow web developers to arrange data into rows and columns.

        For example, your education information could be displayed like this:

            Degree	   Field                Status
            B.Tech	 AI & Data Science	    Pursuing
            Diploma	 Computer Application	Completed

        HTML uses several elements to create this structure.

        A table in HTML consists of table cells inside rows and columns.

        ## Table Cells:
            Each table cell is defined by a <td> and a </td> tag.

            td ---> stands for table data.

            Everything between <td> and </td> is the content of a table cell.

        ## Table Rows
            Each table row starts with a <tr> and ends with a </tr>

            tr ---> stands for table row

        ## Table Headers
            Sometimes you want your cells to be table header cells. In those cases use the <th> tag instead of the <td> tag
                
                th ---> stands for table header.

        ## Example

            <table>

                <tr>
                    <th>Name</th>
                    <th>Age</th>
                </tr>

                <tr>
                    <td>Dinesh</td>
                    <td>21</td>
                </tr>

            </table>

            Gives 
                -----------------
                | Name    | Age |
                -----------------
                | Dinesh  | 21  |
                -----------------

        ## Table Borders
            HTML tables can have borders of different styles and shapes.

            To add a border, use the CSS border property is used on the table,th and td elements.
            
            example:
                 table, th, td {
                    border: 1px solid black;
                }

        ## Collapsed Table Borders:
            To avoid having double borders like in the example above,set the CSS border-collapse property to collapse.

            this will make the border single.

             table, th, td {
                border: 1px solid black;
                border-collapse: collapse;
            } 

        ## Style Table Borders
            If you set a background color of each cell, and give the border a white color (the same as the document background), you get the impression of an invisible border:

            table, th, td {
                border: 1px solid white;
                border-collapse: collapse;
            }
            th, td {
                background-color: #96D4D4;
            }

        ## Round Table Borders:
            With the border-radius property, the borders get rounded corners:

            table, th, td {
                border: 1px solid black;
                border-radius: 10px;
            }

            Skip the border around the table by leaving out table from the css selector:

            th, td {
            border: 1px solid black;
            border-radius: 10px;
            }

        ## Double Table Borders
            With the border-style property, you can set the appearance of the border.

            th, td {
                border-style: dotted;
            }

        ## Border Color
            With the border-color property, you can set the color of the border.

            th, td {
                border-color: #96D4D4;
            }

        ## Table Sizes
            HTML tables can have different sizes for each column, row or the entire table.

            Use the style attribute with the width or height properties to specify the size of a table, row or column.

        ## HTML Table Width
            To set the width of a table, add the style attribute to the <table> element:

            <table style="width:100%">
            <tr>
                <th style="width:70%">Firstname</th>
                <th>Lastname</th>
                <th>Age</th>
            </tr>
            <tr>
                <td>Jill</td>
                <td>Smith</td>
                <td>50</td>
            </tr>

        ## HTML Table Column Width
            To set the size of a specific column, add the style attribute on a <th> or <td> element:

                <table style="width:100%">
                    <tr>
                        <th style="width:70%">Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                    </tr>
                </table>
    
        ## HTML Table Row Height
            To set the height of a specific row, add the style attribute on a table row element:

            <table style="width:100%">
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Age</th>
                </tr>
                <tr style="height:200px">
                    <td>Jill</td>
                    <td>Smith</td>
                    <td>50</td>
                </tr>
            </table>


        ## HTML Table Headers
            Table headers are defined with th elements. Each th element represents a table cell.

            <table>
            <tr>
                <th>Firstname</th>
                <td>Jill</td>
                <td>Eve</td>
            </tr>
            <tr>
                <th>Lastname</th>
                <td>Smith</td>
                <td>Jackson</td>
            </tr>
            </table>


        ## Table Caption
            We can add a caption that serves as a heading for the entire table.

            <table style="width:100%">
                <caption>Monthly savings</caption>
                <tr>
                    <th>Month</th>
                    <th>Savings</th>
                </tr>
                <tr>
                    <td>January</td>
                    <td>$100</td>
                </tr>
            </table>

        ## Vertical Table Headers
            To use the first column as table headers, define the first cell in each row as a <th> element:

                <table>
                <tr>
                    <th>Firstname</th>
                    <td>Jill</td>
                    <td>Eve</td>
                </tr>
                <tr>
                    <th>Lastname</th>
                    <td>Smith</td>
                    <td>Jackson</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>94</td>
                    <td>50</td>
                </tr>
                </table> 


        ## Colspan
            colspan is an attribute used with the <td> or <th> element to make one cell occupy multiple columns.

            <td colspan="2">Dinesh</td>

            Without colspan

                | Name | Age | Course |
                |------|-----|--------|
                | Dinesh | 21 | B.Tech |

            with colspan="2"

                | Name          | Course |
                |---------------|--------|
                | Dinesh        | B.Tech |

            Here, the Name cell occupies 2 columns.

            example:    

                <table border="1">

                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Course</th>
                    </tr>

                    <tr>
                        <td colspan="2">Dinesh</td>
                        <td>B.Tech</td>
                    </tr>

                </table>

            use case:

                <table border="1">

                    <tr>
                        <th colspan="3">Education Details</th>
                    </tr>

                    <tr>
                        <th>Degree</th>
                        <th>Field</th>
                        <th>Status</th>
                    </tr>

                    <tr>
                        <td>B.Tech</td>
                        <td>AI & Data Science</td>
                        <td>Pursuing</td>
                    </tr>

                </table>

        ## rowspan
            rowspan is an HTML attribute used to make one table cell occupy multiple rows.

            <table border="1">
                <tr>
                    <th>Name</th>
                    <th>skill</th>
                </tr>

                <tr>
                    <td rowspan="2>Dinesh</td>
                    <td>Java<td>
                </tr>

                <tr>
                    <td>Python</td>
            </table>

            so it occupies 2 rows.

                -------------------
                | Name   | Skill  |
                -------------------
                |        | Java   |
                | Dinesh |---------
                |        | Python |
                -------------------

        ## Align Table Headers:
            By default, table headers are bold and centered:

            To left-align the table headers, use the CSS text-align property:

             th {
                text-align: left;
            }

        ## HTML Table Spacing and padding:
            HTML tables can adjust the padding inside the cells, and also the space between the cells.

            Cell padding:
                Cell padding is the space between the content inside a table cell and the cell's border.

                Think of it like the internal space inside a box.

            example:
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>

                    <tr>
                        <td>Dinesh</td>
                        <td>21</td>
                    </tr>
                </table>

                Adding cell padding 

                    <style>
                        td, th {
                            padding: 10px;
                        }
                    </style>

                Now every <td> and <th> gets 10px of space around its content.

                Add padding to the other sides with the padding-bottom, padding-left, and padding-right properties:

                     th, td {
                        padding-top: 10px;
                        padding-bottom: 20px;
                        padding-left: 30px;
                        padding-right: 40px;
                    } 

        ## Cell Spacing:

            Cell spacing → space between separate cells.

            | Cell 1 |     | Cell 2 |
                        ^
                    spacing

            By default the space is set to 2 pixels.

            To change the space between table cells, use the CSS border-spacing property on the table element:

            example:
                table {
                    border-spacing: 30px;
                }          

        ## Table Styling
            HTML Table - Zebra Stripes

                If you add a background color on every other table row, you will get a nice zebra stripes effect.      

                To style every other table row element, use the :nth-child(even) selector like this:

                example:

                     tr:nth-child(even) {
                        background-color: #D6EEEE;
                    }


        ## Vertical Zebra Stripes
            To make vertical zebra stripes, style every other column, instead of every other row.

            Set the :nth-child(even) for table data elements like this:

             td:nth-child(even), th:nth-child(even) {
                background-color: #D6EEEE;
            }  

        ## Vertical + Horizontal Zebra Stripes
            We can also combine 2 styles:

                 tr:nth-child(even) {
                background-color: rgba(150, 212, 212, 0.4);
                }

                th:nth-child(even),td:nth-child(even) {
                background-color: rgba(150, 212, 212, 0.4);
                } 


        ## Horizontal Dividers:
            If we specify borders only at the bottom of each table row, you will have a table with horizontal dividers.


            Add the border-bottom property to all tr elements to get horizontal dividers:

            example:
                 tr {
                    border-bottom: 1px solid #ddd;
                } 


        ## Hoverable Table:
            A hoverable table is a table where the appearance of a row or cell changes when you move the mouse pointer over it.

            Use the :hover selector on tr to highlight table rows on mouse over:

             tr:hover {background-color: #D6EEEE;} 

        ## Table Colgroup
            The <colgroup> element is used to style specific columns of a table.

             If you want to style the first two columns of a table, use the <colgroup> and <col> elements. 

             The span attribute specifies how many columns get the style.

            The style attribute specifies the style to give the columns.

            <table style="width: 100%;">
                <colgroup>
                <col span="2" style="background-color: #D6EEEE">
                </colgroup>
                <tr>
                <th>MON</th>
                <th>TUE</th>
                <th>WED</th>
                <th>THU</th>
                <th>FRI</th>
                <th>SAT</th>
                <th>SUN</th>
                </tr>
                <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>5</td>
                <td>6</td>
                <td>7</td>
                </tr>
            </table>

        ## Legal CSS Properties:

            There is only a very limited selection of CSS properties that are allowed to be used in the colgroup:

            width property
            visibility property
            background properties
            border properties

            All other CSS properties will have no effect on your tables. 

        ## Multiple Col Elements
            If you want to style multiple columns with different styles, use more than one <col> element inside the <colgroup>:

            <table>
                <colgroup>
                    <col span="2" style="background-color: #D6EEEE">
                    <col span="3" style="background-color: pink">
                </colgroup>
                <tr>
                    <th>MON</th>
                    <th>TUE</th>
                    <th>WED</th>
                    <th>THU</th>
                </tr>
            </table>

        ## Hide Columns
            we can hide columns with the visibility: collapse property:

                 <table>
                    <colgroup>
                        <col span="2">
                        <col span="3" style="visibility: collapse">
                    </colgroup>
                    <tr>
                        <th>MON</th>
                        <th>TUE</th>
                        <th>WED</th>
                        <th>THU</th>
                        <th>FRI</th>
                        <th>SAT</th>
                        <th>SUN</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>9</td>
                        <td>10</td>
                        <td>11</td>
                        <td>12</td>
                        <td>13</td>
                        <td>14</td>
                    </tr>
                </table>

        ## Use cases:   
            1. Hiding columns - in the admin dashboard

            | ID  | Name   | Email | Phone | Address | Salary |
            | --- | ------ | ----- | ----- | ------- | ------ |
            | 101 | Dinesh | ...   | ...   | ...     | ₹30K   |
            | 102 | Arun   | ...   | ...   | ...     | ₹35K   |

            Admin dashboards → hide less-important columns on smaller screens.
            Employee management → hide sensitive information such as salary from certain views.
            E-commerce → hide product details that aren't important on mobile.
            Reports → allow users to hide optional columns.
            Data tables → let users choose which columns they want to see.

            2.Multiple <col> elements
                Imagine an employee report:

                Employee Information
            ┌──────────┬──────────┬──────────┬────────────┐
            │ Name     │ Age      │ Dept     │ Salary     │
            ├──────────┼──────────┼──────────┼────────────┤
            │ Dinesh   │ 21       │ IT       │ ₹30,000    │
            └──────────┴──────────┴──────────┴────────────┘

            Name → normal
            Age + Department → one group
            Salary → special styling

            <colgroup> makes this kind of column-level organization easier.

            3. Table <colgroup>

                -Financial reports
                -Student mark sheets
                -Employee tables
                -Product comparison tables
                -Sales reports
                -Attendance tables   

                Student Marks

                Name        Maths       Physics       Total
                Dinesh      90          85            175
                Arun        80          88            168

            4.Horizontal Table:
                horizontal table is the normal table structure:

                Real-world examples

                E-commerce:

                Product | Price | Quantity | Total

                Employee management:

                Name | Department | Role | Status

                Student marks:

                Name | Maths | Physics | Chemistry

                Tables are particularly useful when you need to compare values across multiple records.

            5. Vertical table
                A vertical-style table can organize one person's information vertically:

                Property    | Value
                ------------------------
                Name        | Dinesh
                Age         | 21
                Degree      | B.Tech
                Department  | AI & Data Science
                Status      | Pursuing

                This style is useful for:

                    -Profile details
                    -Product details
                    -Employee details
                    -Customer information
                    -Order details
                    -Student information

# HTML List
    An HTML list is used to display a group of related items in an organized format.

    HTML provides three main types of lists:

    Unordered List — <ul>
    Ordered List — <ol>
    Description List — <dl>

    ## 1.Unordered List
        An unordered list displays items using bullet points.

        The <ul> element is used to create an unordered list.

        Each item inside the list is created using the <li> element.

        syntax:

            Syntax
            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>HTML</li>
            </ul>

            Output
            • Java
            • Python
            • HTML

            Important Elements
            <ul> → Unordered list
            <li> → List item
            When to use?

            Use an unordered list when the order of the items is not important.

            Examples:

                -Skills
                -Features
                -Shopping items
                -Navigation menus
                -Hobbies

    ## Ordered List
        An ordered list displays items in a specific sequence, usually using numbers.

        The <ol> element is used to create an ordered list.

        Syntax

            <ol>
                <li>Open VS Code</li>
                <li>Create an HTML file</li>
                <li>Write HTML code</li>
                <li>Open the page in a browser</li>
            </ol>

        Output

            1. Open VS Code
            2. Create an HTML file
            3. Write HTML code
            4. Open the page in a browser
            When to use?

        Use an ordered list when the order or sequence of the items is important.

        Examples:

            -Steps in a process
            -Instructions
            -Rankings
            -Procedures
            -Tutorials

    ## List Item

        <li> represents an individual item inside an ordered or unordered list.

        Example:

            <ul>
                <li>Java</li>
                <li>Python</li>
                <li>JavaScript</li>
            </ul>

            Here:

            <li>Java</li>

            represents one list item.

            The <li> element is normally used inside:

            <ul>

            or

            <ol>

    ## Changing the Ordered List Type

        The type attribute can change the numbering style of an ordered list.

        Numbers

            <ol type="1">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>

            Output:

                1. HTML
                2. CSS
                3. JavaScript

        Uppercase Letters

            <ol type="A">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>

            Output:

                A. HTML
                B. CSS
                C. JavaScript
        Lowercase Letters

            <ol type="a">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>

            Output:

                a. HTML
                b. CSS
                c. JavaScript

        Uppercase Roman Numerals
        
            <ol type="I">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>

            Output:

                I. HTML
                II. CSS
                III. JavaScript
        
        Lowercase Roman Numerals

            <ol type="i">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
            </ol>

            Output:

                i. HTML
                ii. CSS
                iii. JavaScript

        The commonly supported values are:

        Type	Numbering

        1	    1, 2, 3
        A   	A, B, C
        a   	a, b, c
        I	    I, II, III
        i	    i, ii, iii


    ## Starting an Ordered List from a Specific Number

        The start attribute specifies the starting number of an ordered list.

        Example:

        <ol start="5">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
        </ol>

        Output:

        5. HTML
        6. CSS
        7. JavaScript

        The list does not have to start from 1.

    ## Reversed Ordered List

        The reversed attribute makes an ordered list count backwards.

        Example:

            <ol reversed>
                <li>Third</li>
                <li>Second</li>
                <li>First</li>
            </ol>

            Output:

                3. Third
                2. Second
                1. First

            we can also combine start and reversed.

            <ol start="5" reversed>
                <li>Five</li>
                <li>Four</li>
                <li>Three</li>
            </ol>

            Output:

            5. Five
            4. Four
            3. Three

    ## Unordered List Bullet Styles

        An unordered list normally displays bullet points.

        The bullet appearance can be changed using CSS.

        ul {
            list-style-type: square;
        }

        Common values include:

            list-style-type: disc;
            list-style-type: circle;
            list-style-type: square;
            list-style-type: none;

        Example:

        <ul style="list-style-type: square;">
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
        </ul>

        Output:

            ▪ Java
            ▪ Python
            ▪ SQL

        For modern HTML development, CSS is preferred for controlling list appearance

    ## Description List

        A description list is used to display terms and their descriptions.

        It uses three elements:

        <dl> → Description list
        <dt> → Description term
        <dd> → Description/details of the term

        Syntax

            <dl>

                <dt>HTML</dt>
                <dd>HyperText Markup Language</dd>

                <dt>CSS</dt>
                <dd>Cascading Style Sheets</dd>

            </dl>


        HTML
            HyperText Markup Language

        CSS
            CSS Cascading Style Sheets

        Real-world use cases

            Description lists can be useful for:

                -Glossaries
                -Definitions
                -FAQs
                -Product specifications
                -Terms and descriptions
                -Metadata
    
    ## Nested List

        A list can contain another list inside one of its list items.

        This is called a nested list.

        Example:

        <ul>

            <li>Programming Languages
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                </ul>
            </li>

            <li>Web Technologies
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </li>

        </ul>

        Output:

        • Programming Languages
            • Java
            • Python

        • Web Technologies
            • HTML
            • CSS
            • JavaScript

        Nested lists are useful when information has a hierarchical structure.

    ## Ordered List Inside an Unordered List

        You can also combine different types of lists.

        Example:

        <ul>

            <li>Frontend
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ol>
            </li>

            <li>Backend
                <ol>
                    <li>Node.js</li>
                    <li>Express.js</li>
                </ol>
            </li>

        </ul>

        Output:

        • Frontend
            1. HTML
            2. CSS
            3. JavaScript

        • Backend
            1. Node.js
            2. Express.js

    ## Real-World Uses of HTML Lists

        HTML lists are commonly used in websites.

        Navigation menu
        
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>

        Skills

        <ul>
            <li>Java</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML</li>
            <li>CSS</li>
        </ul>
        
        Instructions

        <ol>
            <li>Create an account</li>
            <li>Verify your email</li>
            <li>Log in</li>
        </ol>
        
        Product features

        <ul>
            <li>Free shipping</li>
            <li>Easy returns</li>
            <li>Secure payment</li>
        </ul>

# Div Element
    <div> stands for division.

    The <div> element is a generic container used to group HTML elements together.

    It does not have any special meaning by itself. It is mainly used to organize content and apply CSS or JavaScript to a group of elements.

    Basic Syntax

    <div>
        <h2>About Me</h2>
        <p>I am learning HTML and CSS.</p>
    </div>

    Here, the <div> groups the <h2> and <p> elements together.

    ## Why we need to use the div element?  

        Suppose we have:

            <h2>About Me</h2>
            <p>I am learning HTML.</p>

            <h2>My Skills</h2>
            <p>Java, Python, HTML, CSS</p>

        If we want to style the About Me content as one group, we can put it inside a <div>:

            <div>
                <h2>About Me</h2>
                <p>I am learning HTML.</p>
            </div>

            <div>
                <h2>My Skills</h2>
                <p>Java, Python, HTML, CSS</p>
            </div>

        Now each <div> represents a separate group.

    ## div as a container

        A <div> can contain multiple HTML elements.

        <div>
            <h2>My Profile</h2>

            <p>My name is Dinesh.</p>

            <img src="sample images/profile.png" alt="Profile image">

            <a href="projects.html">View Projects</a>
        </div>

        The <div> acts as a container for:

        <div>
        │
        ├── <h2>
        ├── <p>
        ├── <img>
        └── <a>
        </div>

    ## Styling a <div> with CSS
        
        One of the main uses of <div> is to apply CSS to a group of elements.

        HTML

        <div class="profile-box">

            <h2>About Me</h2>

            <p>
                I am learning HTML, CSS and JavaScript.
            </p>

        </div>

        CSS

        .profile-box {
            background-color: lightgray;
            padding: 20px;
            border: 1px solid black;
        }

        Now the entire group gets the styling.

    ## Using class with </div>

        A class can be used to identify a <div> for CSS.

        <div class="about">
            <h2>About Me</h2>
            <p>I am a student.</p>
        </div>

        CSS:

        .about {
            background-color: lightgray;
            padding: 20px;
        }

        The class allows the same styling to be reused.

        For example:

            <div class="card">
                <h3>Project 1</h3>
                <p>My first project.</p>
            </div>

            <div class="card">
                <h3>Project 2</h3>
                <p>My second project.</p>
            </div>

            CSS:

            .card {
                border: 1px solid gray;
                padding: 15px;
                margin: 10px;
            }

        We can also use the id instead of class.

    ## Nested <div> Elements.

        A <div> can contain another <div>.

        This is called nesting.

        <div class="profile">

            <div class="profile-image">
                <img src="sample images/profile.png" alt="Profile image">
            </div>

            <div class="profile-details">
                <h2>Dinesh</h2>
                <p>AI & Data Science Student</p>
            </div>

        </div>

        The structure is:

        <div class="profile">
        │
        ├── <div class="profile-image">
        │   └── <img>
        │
        └── <div class="profile-details">
            ├── <h2>
            └── <p>

        Nested <div> elements are commonly used to create complex layouts.

    ## Block level Element <div>

        By default, <div> is a block-level element.

        This means a <div> normally:

        starts on a new line
        takes the available width
        can contain other elements

        Example:

            <div>First Div</div>
            <div>Second Div</div>

        Normally displayed as:

            First Div
            Second Div

            rather than:

            First Div Second Div

    ## <div> Does Not Have Semantic Meaning

        This is an important concept.

        A <div> does not tell the browser what the content means.

        For example:

        <div>
            <h2>My Projects</h2>
            <p>Project information...</p>
        </div>

        The browser understands:

        "This is a generic container."

        It does not understand that the container represents a project section.

        Later, when you learn semantic HTML, you will learn elements that provide meaning to different parts of a webpage.

        For example:

        <section>
            ...
        </section>

        But since semantic elements are covered separately, <div> is currently useful for understanding grouping and layout.

    ## <div> vs <span>

        Both <div> and <span> are generic containers, but they behave differently by default.

        <div>

        <div> is a block-level element.

        <div>First</div>
        <div>Second</div>

        Output:

        First
        Second
        <span>

        <span> is an inline element.

        <span>First</span>
        <span>Second</span>

        Output:

        First Second

    ## Real -World uses of <div>

        <div> is commonly used in:

        Profile cards

            <div class="profile-card">
                <img src="profile.png" alt="Profile">
                <h2>Dinesh</h2>
                <p>AI & Data Science</p>
            </div>

        Product cards

            <div class="product-card">
                <h3>Laptop</h3>
                <p>₹50,000</p>
                <button>Buy Now</button>
            </div>

        Login forms

            <div class="login-box">
                <h2>Login</h2>

                <input type="email">
                <input type="password">

                <button>Login</button>
            </div>

        Dashboard layouts

            <div class="dashboard">
                <div class="sidebar">
                    Navigation
                </div>

                <div class="content">
                    Dashboard data
                </div>
        </div>
            
        Grouping related content

            <div class="education">
                <h2>Education</h2>
                <p>B.Tech - AI & Data Science</p>
            </div>

# HTML ID Attribute
    The id attribute is used to give a unique identifier to an HTML element.

    An id helps us identify a specific element on a webpage so that we can:

        -Apply CSS styles to that specific element.
        -Create links that jump to a specific part of the page.
        -Access the element using JavaScript.
        -Identify elements uniquely.

    Syntax
        <element id="unique-name">
            Content
        </element>

        Example:

            <h2 id="about">About Me</h2>

            Here:

            <h2> → HTML element
            id → attribute
            "about" → value of the id
            About Me → content

    ## Rules for Using id

        An id should be unique within an HTML document.

        Example:

            <h2 id="about">About Me</h2>

            We should not use the same id for multiple elements:

            <h2 id="about">About Me</h2>
            <p id="about">My information</p>

            Instead, use different IDs:

            <h2 id="about">About Me</h2>
            <p id="about-description">My information</p>
            Naming IDs

            IDs can contain letters, digits, hyphens, underscores, and other valid characters, but it is best to use clear and simple names.

        Examples:

            <div id="profile"></div>
            <div id="about-me"></div>
            <div id="skills"></div>
            <div id="project-list"></div>

            A common convention is to use lowercase letters with hyphens for readability.

    ## Using ID with CSS

        An id can be used as a CSS selector.

        The CSS selector for an ID starts with #.

        HTML

            <h2 id="about">About Me</h2>

        CSS

            #about {
                color: darkblue;
                text-align: center;
            }

        Here:

            #about
            ↓
            Selects the element
            ↓
            id="about"

        The # tells CSS that we are selecting an element by its id.

    ## Using ID with Links

        An id can be used to create a link to a specific location on the same webpage.

        Example

            <a href="#skills">Go to My Skills</a>

            <h2 id="skills">My Skills</h2>

            When the user clicks:

            <a href="#skills">

            the browser looks for:

            id="skills"

            and moves to that element.

            How it works
            
            <a href="#skills">
                    ↓
            Browser searches for
                    ↓
            id="skills"
                    ↓
            <h2 id="skills">
                    ↓
            Moves to that location

        This is called a fragment link or same-page link.

    ## ID with Navigation

        IDs are commonly used to create navigation within a webpage.

        Example:

            <div>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#education">Education</a>
                <a href="#projects">Projects</a>
            </div>

            <div id="about">
                <h2>About Me</h2>
                <p>Information about me.</p>
            </div>

            <div id="skills">
                <h2>My Skills</h2>
                <p>My technical skills.</p>
            </div>

            <div id="education">
                <h2>Education</h2>
                <p>My educational details.</p>
            </div>

            <div id="projects">
                <h2>Projects</h2>
                <p>My projects.</p>
            </div>

            Clicking each link takes the user to the corresponding element.

    ## ID with JavaScript

        JavaScript can use an id to find a specific HTML element.

        Example:

            <p id="message">Hello</p>

            <script>
                document.getElementById("message").textContent = "Welcome!";
            </script>

            Initially:

            Hello

            JavaScript finds the element using:

            document.getElementById("message")

            and changes its content to:

            Welcome!

            So IDs are also useful for JavaScript DOM manipulation.

    ## ID vs Class

        Both id and class can be used to identify HTML elements, but they have different purposes.

        ID	                                      Class
        Should be unique on a page      Can be used on multiple elements
        Used to identify a specific element     Used to group similar elements
        CSS selector uses        #	CSS selector uses .
        id="profile"        class="profile"
        #profile        .profile


        ID example

            <h1 id="main-title">My Portfolio</h1>
            #main-title {
                color: blue;
            }

        Class example

            <p class="introduction">Hello</p>
            <p class="introduction">Welcome to my portfolio.</p>
            .introduction {
                color: gray;
            }

        The same class can be used by multiple elements, whereas an ID should identify one specific element.

    ## Real-World Uses of ID

        IDs are commonly used for:

        1.Styling a specific element
            <h1 id="main-title">My Portfolio</h1>
        
        2.Creating page navigation
            <a href="#projects">Projects</a>
        
        3.JavaScript DOM manipulation
            document.getElementById("projects")
        
        4.Identifying important page elements
            <div id="profile"></div>
        
        5.Creating links to specific locations
            <a href="#contact">Contact Me</a>

# Semantic Elements

    Semantic elements are HTML elements that clearly describe the meaning and purpose of their content to both the browser and the developer.

    The word semantic means related to meaning.

    For example:

        <header>
            <h1>My Portfolio</h1>
        </header>

    Here, <header> tells us that the content inside it represents the header area of the webpage.

    ## Why Semantic Elements Are Used

        Semantic elements make HTML code:

        -Easier to understand
        -Easier to maintain
        -More meaningful
        -Better for accessibility
        -Better for search engines
        -Better structured

        Compare these two examples.

        Using <div>

            <div>
                <h1>My Portfolio</h1>
            </div>

            <div>
                <h2>About Me</h2>
                <p>Information about me.</p>
            </div>

            The browser knows that these are <div> elements, but the <div> itself does not tell us what the content means.

            Using semantic elements
            <header>
                <h1>My Portfolio</h1>
            </header>

            <section>
                <h2>About Me</h2>
                <p>Information about me.</p>
            </section>

            Now the HTML itself communicates the purpose of each area.

    ## Common Semantic Elements

        HTML provides several semantic elements.

        Element     	Purpose
        <header>	Represents introductory/header content
        <nav>	Represents navigation links
        <main>	Represents the main content of the page
        <section>	Represents a thematic section of content
        <article>	Represents independent/self-contained content
        <aside>	Represents related or secondary content
        <footer>	Represents footer information
        <figure>	Represents self-contained media/content
        <figcaption>	Provides a caption for a <figure>
        <details>	Creates expandable content
        <summary>	Provides the visible heading for <details>
        <mark>	Highlights relevant text
        <time>	Represents a date or time

    ## <header> Element

        The <header> element represents introductory content for a page or a section.

        It commonly contains:

        Logo
        Heading
        Introduction
        Navigation
        Other introductory information

        Example:

        <header>
            <h1>My Portfolio</h1>
            <p>Welcome to my personal portfolio.</p>
        </header>

        A page can have a header, and individual sections can also have their own headers.

    <nav> Element

        The <nav> element represents a group of important navigation links.

        Example:

        <nav>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>

        The browser and assistive technologies can understand that these links are used for navigation.

    <main> Element

        The <main> element represents the main content of the webpage.

        Example:

            <main>

                <h2>About Me</h2>

                <p>
                    I am learning HTML, CSS, and JavaScript.
                </p>

                <h2>My Skills</h2>

                <p>
                    Java, Python, HTML, CSS and JavaScript.
                </p>

            </main>

        A document should normally have one <main> element representing the primary content.

    <section> Element

        The <section> element represents a thematic grouping of content.

        For example, a portfolio can have separate sections for:

            About Me
            Skills
            Education
            Projects

        Example:

            <section>
                <h2>About Me</h2>
                <p>
                    I am a B.Tech student interested in technology.
                </p>
            </section>

            <section>
                <h2>My Skills</h2>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </section>

        A section usually has a heading that describes its topic.

    <article> Element

        The <article> element represents independent, self-contained content.

        The content should make sense on its own.

        Common examples include:

        Blog posts
        News articles
        Forum posts
        Product reviews
        User comments

        Example:

        <article>
            <h2>My HTML Learning Journey</h2>

            <p>
                I started learning HTML from the basics
                and gradually learned different elements.
            </p>
        </article>

        The article can be understood independently from the rest of the page.

    <aside> Element

        The <aside> element represents content that is related to the main content but not part of its primary flow.

        Examples:

        Related links
        Additional information
        Author information
        Advertisements
        Sidebars

        Example:

            <aside>
                <h3>Related Topics</h3>

                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                </ul>
            </aside>

    <footer> Element

        The <footer> element represents footer information for a webpage or section.

        It commonly contains:

        Copyright information
        Contact information
        Related links
        Author information

        Example:

            <footer>
                <p>© 2026 Dinesh. All rights reserved.</p>
            </footer>
    
    <figure> Element

        The <figure> element is used for self-contained content such as:

        Images
        Diagrams
        Illustrations
        Code examples
        Charts

        Example:

        <figure>
            <img src="sample images/coding.gif"
                alt="Coding animation">

            <figcaption>
                My coding and learning journey
            </figcaption>
        </figure>

    <figcaption> Element

        <figcaption> provides a caption or description for content inside a <figure>.

        Example:

            <figure>

                <img src="sample images/profile.png"
                    alt="Profile image">

                <figcaption>
                    My Profile Picture
                </figcaption>

            </figure>

        The relationship is:

        <figure>
            ↓
            Media/content
            ↓
        <figcaption>
            ↓
        Caption

    <details> Element

        The <details> element creates content that the user can expand and collapse.

        Example:

            <details>
                <summary>My Learning Goals</summary>

                <p>
                    I want to improve my HTML, CSS,
                    JavaScript and backend development skills.
                </p>
            </details>

        Initially, the detailed content can be collapsed.

        When the user clicks the summary, the content expands.

    <summary> Element

        <summary> provides the visible heading for a <details> element.

        Example:

            <details>
                <summary>Click to see my skills</summary>

                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>HTML</li>
                </ul>
            </details>

        Here:

        <details>
            ↓
        <summary>
            ↓
        Visible clickable heading
            ↓
        Hidden/expandable content

    <mark> Element

        The <mark> element highlights text that is relevant or important in the current context.

        Example:

        <p>
            I am currently learning
            <mark>HTML and CSS</mark>.
        </p>

        The text inside <mark> is highlighted by default.

    ## Semantic vs Non-Semantic Elements

        HTML elements can be broadly understood as semantic and non-semantic.

        Semantic elements

            They clearly describe their purpose.

                <header>
                <nav>
                <main>
                <section>
                <article>
                <aside>
                <footer>

        Non-semantic elements
            They do not describe the meaning of their content.

            <div>
            <span>

            For example:

            <div>
                <h2>About Me</h2>
            </div>

            The <div> only acts as a generic container.

            Whereas:

                <section>
                    <h2>About Me</h2>
                </section>

                The <section> tells us that this content represents a particular section of the page.

    ## Semantic HTML and Accessibility

        Semantic elements help assistive technologies, such as screen readers, understand the structure of a webpage.

        For example:

            <nav>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
            </nav>

        A screen reader can recognize that the links are part of a navigation region.

        This helps users navigate the webpage more effectively.

    ## Semantic HTML and Search Engines

        Semantic HTML also helps search engines understand the structure and meaning of webpage content.

        For example:

            <article>
                <h2>Learning HTML</h2>
                <p>
                    HTML is used to structure webpages.
                </p>
            </article>

        The structure gives clearer meaning to the content than a collection of generic <div> elements.

        Semantic HTML is therefore useful for SEO, although using semantic elements alone does not guarantee.

## HTML <iframe> Element

    The <iframe> element is used to embed another HTML document or external content inside the current webpage.

    iframe stands for Inline Frame.

    It creates a separate browsing area inside the current webpage.

    Basic Syntax

        <iframe src="URL"></iframe>

    Example:

        <iframe src="https://example.com"></iframe>

        The browser loads the page specified by src and displays it inside the iframe.

    ## src Attribute

        The src attribute specifies the URL of the content that should be displayed inside the iframe.

        Example:

            <iframe src="https://example.com"></iframe>

            Here:

            src
            ↓
            https://example.com
            ↓
            Page loaded inside iframe
            Width and Height

            The width and height attributes specify the dimensions of the iframe.

        Example:

            <iframe
                src="https://example.com"
                width="600"
                height="400">
            </iframe>

            Here:

                width="600" → iframe width is 600 pixels.
                height="400" → iframe height is 400 pixels.

                CSS is generally preferred for controlling dimensions in modern websites.

            Example:

                <iframe
                    src="https://example.com"
                    class="website-frame">
                </iframe>
                .website-frame {
                    width: 100%;
                    height: 400px;
                }

    ## title attribute

        The title attribute provides a description of the iframe.

        It is important for accessibility, especially for users who use screen readers.

        Example:

            <iframe
                src="https://example.com"
                title="Example website">
            </iframe>

        A descriptive title is preferred over something vague such as:

        title="iframe"

        Better:

        title="My GitHub profile"

    ## Embedding a Website

        An iframe can be used to embed another webpage.

        Example:

            <iframe
                src="https://example.com"
                width="800"
                height="500"
                title="Example webpage">
            </iframe>

        However, not every website allows itself to be embedded in an iframe.

        A website can use security policies such as X-Frame-Options or Content Security Policy to prevent embedding.

        Therefore, if an external website does not appear inside an iframe, the problem may be the external website's security policy rather than your HTML code.

    ## Embedding YouTube Videos

        One of the most common uses of an iframe is embedding videos from YouTube.

        Example:

            <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video"
                allowfullscreen>
            </iframe>

            The important part is:

            https://www.youtube.com/embed/VIDEO_ID

            YouTube provides an Embed option that generates the appropriate iframe code.

    ## allowfullscreen

        The allowfullscreen attribute allows the embedded content to enter fullscreen mode.

        Example:

            <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video"
                allowfullscreen>
            </iframe>

            This is commonly used when embedding videos.

    ## loading Attribute

        The loading attribute can control when the iframe is loaded.

        Example:

        <iframe
            src="https://example.com"
            title="Example website"
            loading="lazy">
        </iframe>

        loading="lazy" tells the browser that the iframe can be loaded later when it approaches the user's viewport.

        This can help avoid loading embedded content unnecessarily when it is far down the page.

    ## name attribute

        An iframe can have a name.

        Example:

            <iframe
                name="myframe"
                title="Embedded webpage">
            </iframe>

            A link can then specify that iframe as its target.

            Example:

            <a href="about.html" target="myframe">
                Open About Page
            </a>

            When the link is clicked, the page can load into the iframe named myframe.

            Example:

            <iframe
                name="myframe"
                width="600"
                height="400"
                title="Content frame">
            </iframe>

            <p>
                <a href="about.html" target="myframe">
                    Open About Page
                </a>
            </p>

    ## Iframe with a Local HTML File

        An iframe can also display another HTML file from your own project.

        Suppose your project has:

        personal-profile/
        │
        ├── index.html
        ├── about.html
        └── style.css

        You can display about.html inside index.html:

        <iframe
            src="about.html"
            width="600"
            height="400"
            title="About page">
        </iframe>

        The browser loads:

        index.html
            ↓
        <iframe>
            ↓
        about.html

        This is useful for understanding how iframes work without depending on an external website.

    ## Iframe and Relative Paths

        Like other HTML elements that use URLs, an iframe can use a relative path.

        Example:

        <iframe
            src="./about.html"
            title="About page">
        </iframe>

        If the file is inside a folder:

        personal-profile/
        │
        ├── index.html
        │
        └── pages/
            └── about.html

        Then:

        <iframe
            src="./pages/about.html"
            title="About page">
        </iframe>

        The browser follows the path relative to the current HTML document.

    ## Iframe vs Link

        An iframe and a link have different purposes.

        Link

            <a href="about.html">
                About Me
            </a>

        Clicking the link navigates to another page.

        Iframe

            <iframe
                src="about.html"
                title="About page">
            </iframe>

        The other page is displayed inside the current page.

    ## Common Real-World Uses

        Iframes are commonly used for:

        1. YouTube Videos

            <iframe
                src="https://www.youtube.com/embed/VIDEO_ID"
                title="YouTube video">
            </iframe>

        2. Google Maps

            Maps can be embedded using the iframe code provided by the mapping service.

        3. External Documents

            Some online document services provide iframe-based embedding.

        4. External Web Applications

            Certain services provide widgets or applications that can be embedded into webpages.

        5. Local HTML Pages

            You can embed another HTML page from your own project.

# JavaScript Within HTML

    JavaScript is a programming language used to add behavior, logic, and interactivity to webpages.

    HTML is mainly used for structure, CSS is used for presentation, and JavaScript is used for behavior.

    HTML
    ↓
    Structure

    CSS
    ↓
    Presentation

    JavaScript
    ↓
    Behavior + Interactivity

    For example, HTML can create a button:

        <button>Click Me</button>

        JavaScript can make that button perform an action when the user clicks it.

    ## What Can JavaScript Do in HTML?

        JavaScript can be used to:

            -Change HTML content
            -Change HTML attributes
            -Change CSS styles
            -Show and hide elements
            -Respond to user actions
            -Validate forms
            -Perform calculations
            -Create interactive components
            -Handle events
            -Communicate with APIs
            -Modify the DOM

        Example:

            <p id="message">Hello</p>

            <button onclick="changeMessage()">
                Click Me
            </button>

            <script>
                function changeMessage() {
                    document.getElementById("message").textContent =
                        "Welcome to my portfolio!";
                }
            </script>

            When the button is clicked, JavaScript changes the paragraph content.

    ## The <script> Element

        The <script> element is used to include JavaScript in an HTML document.

        Example:

            <script>
                alert("Hello World!");
            </script>

        The JavaScript code is written between:

            <script>
                // JavaScript code
            </script>

        The <script> element can contain JavaScript code directly or load JavaScript from an external file.

    ## Internal JavaScript

        When JavaScript code is written directly inside the HTML file, it is called internal JavaScript.

        Example:

            <!DOCTYPE html>

            <html>

            <head>

                <title>JavaScript Example</title>

            </head>

            <body>

                <h1>My Portfolio</h1>

                <script>
                    alert("Welcome to my portfolio!");
                </script>

            </body>

            </html>

            Here, the JavaScript code is written directly inside index.html.

    ## External JavaScript

        JavaScript can also be written in a separate .js file.

        Example project structure:

        personal-profile/
        │
        ├── index.html
        ├── style.css
        └── script.js

        script.js
        function showMessage() {
            alert("Welcome to my portfolio!");
        }

        Then connect it to HTML:

        <script src="script.js"></script>

        The browser loads the JavaScript file and executes the JavaScript code.

    ## src Attribute

        The src attribute specifies the location of an external JavaScript file.

        Example:

        <script src="script.js"></script>

        Here:

            src
            ↓
            script.js
            ↓
            External JavaScript file

            If the JavaScript file is inside a folder:

            personal-profile/
            │
            ├── index.html
            │
            └── js/
                └── script.js

        Then:

        <script src="js/script.js"></script>

    ## Inline JavaScript

        JavaScript can also be written directly inside an HTML attribute that handles an event.

        Example:

        <button onclick="alert('Hello!')">
            Click Me
        </button>

        Here, onclick is an event handler attribute.

        When the user clicks the button, the JavaScript code runs.

        However, inline event handlers are generally not recommended for larger projects because they mix HTML and JavaScript.

        For learning basic event handling, they can be useful.

    ## defer Attribute

        The defer attribute is used with external scripts.

        Example:

        <script src="script.js" defer></script>

        With defer:

        The browser continues parsing the HTML.
        The external JavaScript file can be downloaded while HTML parsing continues.
        The script executes after HTML parsing is complete.
        Deferred scripts maintain their order.

        Example:

        <head>

            <script src="script.js" defer></script>

        </head>

        This is a common way to load scripts that need to interact with the page's HTML elements.

    ## async Attribute

        The async attribute is also used with external scripts.

        Example:

        <script src="script.js" async></script>

        With async:

        The browser downloads the script while continuing to parse HTML.
        When the script finishes downloading, it executes immediately.
        HTML parsing can be paused while the script executes.

        Unlike defer, multiple async scripts do not necessarily execute in their document order.

        async is useful when the script is independent and does not need to wait for the rest of the HTML or other scripts.

    ## JavaScript and the DOM

        The DOM (Document Object Model) represents the HTML document as objects that JavaScript can access and manipulate.

        For example:

            <h1 id="title">My Portfolio</h1>

            JavaScript can find this element:

            const title = document.getElementById("title");

            Then change its content:

            title.textContent = "Welcome to My Portfolio";

        The browser updates the webpage.

            The basic process is:

            HTML
            ↓
            Browser parses HTML
            ↓
            DOM is created
            ↓
            JavaScript accesses DOM
            ↓
            JavaScript changes DOM
            ↓
            Browser updates the page

    ## Changing HTML Content

        JavaScript can change the content of an HTML element.

        Example:

            <p id="message">Old Message</p>

            <script>
                document.getElementById("message").textContent =
                    "New Message";
            </script>

        Initially:

        Old Message

        After JavaScript executes:

        New Message


    ## Changing CSS with JavaScript

        JavaScript can also change CSS styles.

        Example:

            <p id="message">
                This is my message.
            </p>

            <script>
                document.getElementById("message").style.color = "blue";
            </script>

            JavaScript finds the paragraph and changes its text color.

            For larger applications, it is often better to change CSS classes rather than directly modifying many individual styles.

    ## Showing and Hiding Elements

        JavaScript can show or hide an HTML element.

        Example:

        <p id="details">
            These are my portfolio details.
        </p>

        <button onclick="hideDetails()">
            Hide Details
        </button>

        <script>
            function hideDetails() {
                document.getElementById("details").style.display = "none";
            }
        </script>

        When the button is clicked, the paragraph is hidden.

    ## JavaScript Events

            An event is an action or occurrence that JavaScript can respond to.

            Examples:

                click
                input
                change
                submit
                mouseover
                keydown
                load

            Example:

                <button id="myButton">
                    Click Me
                </button>

                <script>
                    document.getElementById("myButton")
                        .addEventListener("click", function () {

                            alert("Button clicked!");

                        });
                </script>

    ## JavaScript with HTML Attributes

        JavaScript can access and modify HTML attributes.

        Example:

        <img
            id="profile-image"
            src="profile.png"
            alt="Profile image">

        <script>

            document.getElementById("profile-image")
                .src = "new-profile.png";

        </script>

        JavaScript changes the image's src attribute.


# File Path 
    An HTML file path specifies the location of a file that an HTML document wants to use.

        HTML file paths are commonly used when connecting:

        Images
        CSS files
        JavaScript files
        Other HTML pages
        Videos
        Audio
        Documents
        Other resources

        For example:

        <img src="images/profile.png" alt="Profile Image">

        Here:

        images/profile.png
            ↓
        File path

        The browser uses this path to find the profile.png file.

    ## Why Are File Paths Important

        HTML files usually do not contain all the resources inside the same file.

        For example, a website may have:

            index.html
            style.css
            script.js
            profile.png
            about.html

        HTML needs a way to tell the browser where these files are located.

        File paths provide that information.

        For example:

            <link rel="stylesheet" href="style.css">

            The href tells the browser where the CSS file is located.

        Similarly:

            <img src="images/profile.png" alt="Profile Image">

            The src tells the browser where the image is located.

            Basic File Path Structure

    ## Basic File Path Structure

        Consider this project:

        my-website/
        │
        ├── index.html
        ├── style.css
        ├── script.js
        │
        └── images/
            └── profile.png

        From index.html:

        <link rel="stylesheet" href="style.css">

        <script src="script.js"></script>

        <img src="images/profile.png" alt="Profile Image">

        The paths are:

        style.css
        script.js
        images/profile.png

    ## Types of File Paths

        There are two main types of file paths commonly used in HTML:

        1.Absolute paths
        2.Relative paths

        1. Absolute Path

            An absolute path specifies the complete location of a resource.

            For a web resource, this commonly means a complete URL.

            Example:

            <img
                src="https://example.com/images/profile.png"
                alt="Profile Image">

            The complete URL is the absolute path:

            https://example.com/images/profile.png

            Another example:

            <a href="https://www.example.com">
                Visit Website
            </a>

            Here:

            https://www.example.com

            is an absolute URL

        2. Relative Path

            A relative path specifies the location of a file relative to the location of the current HTML document.

            Example:

            my-website/
            │
            ├── index.html
            │
            └── images/
                └── profile.png

            The HTML file is:

            index.html

            The image is inside the images folder.

            Therefore:

            <img src="images/profile.png" alt="Profile Image">

            The browser starts from the location of index.html and looks for:

            images/
                ↓
            profile.png

    ## Current Folder

        ./ represents the current folder.

        Example:

        <script src="./script.js"></script>

        This means:

        Current folder
            ↓
        script.js

        If the project is:

        my-website/
        │
        ├── index.html
        └── script.js

        Then:

        <script src="./script.js"></script>

        and:

        <script src="script.js"></script>

        refer to the same file.

        For simple paths, ./ is often optional.

    ## Entering a Folder

        Suppose the project is:

        my-website/
        │
        ├── index.html
        │
        └── images/
            └── profile.png

        The image is inside the images folder.

        Use:

        <img src="images/profile.png" alt="Profile Image">

        The path means:

        images
        ↓
        profile.png

        You can think of / as moving into a folder.

    ## Multiple Folders

        Suppose:

        my-website/
        │
        ├── index.html
        │
        └── assets/
            │
            └── images/
                │
                └── profile.png

        The path from index.html is:

        <img src="assets/images/profile.png" alt="Profile Image">

        The browser follows:

        index.html
            ↓
        assets/
            ↓
        images/
            ↓
        profile.png

    ## Parent folder ..

        .. means go to the parent folder.

        Consider:

        my-website/
        │
        ├── index.html
        │
        └── pages/
            └── about.html

        The about.html file is inside:

        pages/

        But index.html is one level above it.

        From about.html, to link to index.html:

        <a href="../index.html">
            Home
        </a>

        The path:

        ../index.html

        go to parent folder.

    The important idea is:

    ../       Go back one folder
    ../../    Go back two folders
    ../../../ Go back three folders

    Always count the folder levels carefully.

# Uniform Resource Locators (URLs) and URL Encoding

    A URL (Uniform Resource Locator) is the address used to locate a resource on the internet.

    A URL can identify resources such as:

    Web pages
    Images
    Videos
    CSS files
    JavaScript files
    APIs
    Documents
    Other web resources

    For example:

    https://www.example.com/about.html

    This URL tells the browser where a particular resource is located.

    ## What Is a URL?

        URL stands for:

        Uniform Resource Locator

        A URL provides the information needed to locate and access a resource.

        For example:

        https://www.example.com/products

        When you enter this URL into a browser, the browser uses it to request the /products resource from www.example.com.

    ## Basic URL Structure

        A URL can contain several components.

        Example:

        https://www.example.com:443/products/shoes?id=10#details

        The general structure is:

        scheme://host:port/path?query#fragment

        Each part has a different purpose.

        https://www.example.com:443/products/shoes?id=10#details
        │       │               │   │              │       │
        │       │               │   │              │       └── Fragment
        │       │               │   │              └────────── Query
        │       │               │   └──────────────────────── Path
        │       │               └──────────────────────────── Port
        │       └──────────────────────────────────────────── Host
        └──────────────────────────────────────────────────── Scheme

        Not every URL needs to contain every component

    ## 1.Scheme

        The scheme specifies how the resource should be accessed.

        Example:

        https://www.example.com

        Here:

        https

        is the scheme.

        Common schemes include:

        http
        https
        ftp
        mailto
        tel

        For normal websites, you will most commonly see:

        https://

        ## HTTP and HTTPS

            1.HTTP
                http://example.com

                HTTP stands for:

                HyperText Transfer Protocol
                HTTPS
                https://amazon.com

                HTTPS stands for:

                HyperText Transfer Protocol Secure

                HTTPS provides encrypted communication between the browser and server.

                Modern websites generally use HTTPS.

            2. Host

                The host identifies the server or domain where the resource is located.

                Example:

                https://www.amazon.com/about
                        └──────────────┘
                            Host

                Here:
                    www.amazon.com

                    is the host.

                    The host can include a domain name or an IP address.

                    Example:

                    https://192.168.1.10/

        ## Domain Name

            A domain name is a human-readable name used to identify a website.

            Example:

            example.com

            A domain can have different parts.

            www.amazon.com
            │   │       │
            │   │       └── Top-level domain
            │   └────────── Domain name
            └────────────── Subdomain

            For example:

            example.com

            is the domain.

            www.amazon.com

            contains the www subdomain.

        3. Port

            A port identifies a specific network service on a server.

            Example:

            https://amazon.com:443/

            Here:

                443

                is the port number.

                Common ports include:

                HTTP   → 80
                HTTPS  → 443

                The port is often omitted because browsers use the standard port for the scheme.

                Therefore:

                https://example.com

                normally uses HTTPS port 443.

        4.Path

            The path identifies a particular resource or location on the server.

            Example:

            https://amazon.com/products/shoes
                                └────────────┘
                                    Path

            Here:

            /products/shoes

            is the path.

            Another example:

            https://amazon.com/about.html

            The path is:

            /about.html

        Paths and HTML

            HTML commonly uses URLs in attributes such as href and src.

            Example:

            <a href="https://amazon.com/about">
                About
            </a>

            The href contains a URL

            Images can use URLs through src:

            <img
                src="https://example.com/images/profile.png"
                alt="Profile">

        5. Query String

            A query provides additional information to a resource.

            Example:

            https://amazon.com/products?id=10

            Here:

            ?id=10

            is the query component.

            The query starts with:

            ?

            and commonly contains:

            name=value
            
        ##Multiple Query Parameters

            Multiple parameters can be included.

            Example:

            https://amazon.com/products?category=shoes&color=black

            Here:

            category=shoes

            is the first parameter.

                color=black

            is the second parameter.

            The parameters are separated using:

            &

            So:

            ?category=shoes&color=black

        # Fragment

            A fragment identifies a specific part of a resource.

            It begins with:

            #

            Example:

            https://amazon.com/about.html#skills

            Here:

            #skills

            is the fragment.

            In an HTML document, the fragment can refer to an element with a matching id.

            Example:

            <h2 id="skills">
                My Skills
            </h2>

            Then:

            <a href="#skills">
                Go to Skills
            </a>

            When the link is clicked, the browser moves to the element with:

            id="skills".

        # URL Encoding

            URL encoding is the process of representing characters in a URL using a format that is safe and unambiguous for URLs.

            It is also called:

            Percent-encoding

            Certain characters have special meanings inside URLs.

            For example:

            ?
            &
            #
            =
            /

            are used as delimiters or have special purposes.

            If these characters are intended to be ordinary data, they may need to be encoded.

        # Why Is URL Encoding Needed?

            Suppose you want to send this text as a query value:

            hello world

            A space has special handling in URLs, so it can be percent-encoded as:

            hello%20world

            Example:

            https://example.com/search?q=hello%20world

            Here:

            %20

            represents a space.


        # Percent-Encoding

            URL encoding commonly represents a character using:

            %

            followed by two hexadecimal digits.

            For example:

            Space → %20

            The general pattern is:

            %XX

            where XX represents a byte value in hexadecimal.

                    A hexadecimal digit is a single character used in the base-16 number system.

                    example:

                        Everyday Math (Decimal): Uses two digits --> 15
                        
                        Hexadecimal: Uses just one single digit -->  F
            Examples:

            Character       Encoded
            -----------------------
            space           %20
            !               %21
            "               %22
            #               %23
            $               %24
            %               %25
            &               %26
            +               %2B
            =               %3D
            ?               %3F
            Example: Space in a URL

            Suppose the search text is:

            HTML tutorial

            It can be represented as:

            HTML%20tutorial

            Therefore:

            https://example.com/search?q=HTML%20tutorial

            The server can decode:

            HTML%20tutorial

            back into:

            HTML tutorial
            URL Encoding Example with Special Characters

                Suppose you want to send:

                price = $100

                Some characters have special meanings in URLs.

                An encoded representation could be:

                price%20%3D%20%24100

                Here:

                %20 → space
                %3D → =
                %24 → $
            
            ##URL Encoding and Query Parameters

                URL encoding is especially important when data is placed into query parameters.

                Suppose a search value is:

                HTML & CSS

                The & character has a special meaning because it separates query parameters.

                Without encoding:

                ?q=HTML & CSS

                the & could be interpreted as a parameter separator.

                An encoded version is:

                ?q=HTML%20%26%20CSS

                Here:

                %26

                represents:

                &

                So the complete URL is:

                https://amazon.com/search?q=HTML%20%26%20CSS
                URL Encoding and Unicode Characters

            URL encoding can also represent characters outside the basic ASCII range.

            For example, a non-English character can be converted to its UTF-8 bytes and then percent-encoded.

            This allows URLs to safely represent text from many languages.

            For example, a URL may contain encoded Unicode data such as:

            %E0%AE%A4%E0%AE%AE%E0%AE%BF%E0%AE%B4%E0%AF%8D

            which represents UTF-8 encoded Tamil text.

            The important relationship is:

            Unicode character
                ↓
            UTF-8 bytes
                ↓
            Percent-encoding
                ↓
            URL
            URL Encoding vs HTML Encoding

            These two concepts should not be confused.

            HTML Character Encoding

            Example:

                <meta charset="UTF-8">

                This tells the browser how to interpret the bytes of the HTML document.

                URL Encoding

                Example:

                hello%20world

                This represents data safely inside a URL.

                Therefore:

                HTML Encoding
                    ↓
                How the HTML document's characters are encoded

                URL Encoding
                    ↓
                How certain characters are represented inside URLs

## Forms

    An HTML form is used to collect information from users and send that information for processing.

    Forms are commonly used for:

        Login
        Registration
        Contact forms
        Search
        Feedback
        Online orders
        File uploads
        Surveys
        Payments
        User profile information

    For example:

        <form>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name">

            <button type="submit">Submit</button>
        </form>

    The user enters information into the form and submits it.

    # What is an HTML Form?
        The <form> element is a container for user input controls.

        Basic syntax:

            <form>
                Form controls
            </form>

            Example:

            <form>
                <label for="username">Username:</label>
                <input type="text" id="username" name="username">

                <button type="submit">Submit</button>
            </form>

            The form itself does not create the input field.

            Instead, elements such as:

            <input>
            <textarea>
            <select>
            <button>

            are placed inside the <form>.

        ## Important <form> Attributes

        Some commonly used form attributes are:

            action
            method
            target
            autocomplete
            novalidate
            enctype

        1. action

            The action attribute specifies where the form data should be sent when the form is submitted.

            Example:

                <form action="/submit">
                    ...
                </form>

            When the user submits the form, the browser sends the form data to:

            /submit

            Another example:

                <form action="/register">
                    ...
                </form>

            The data is sent to:

            /register

        2.method

            The method attribute specifies how the form data should be sent.

            The most commonly used methods are:

                GET
                POST

            Example:

                <form action="/search" method="get">

                or:

                <form action="/register" method="post">

            ## GET Method

                The GET method sends form data as part of the URL query string.

                Example:

                    <form action="/search" method="get">

                        <label for="query">Search:</label>

                        <input type="text" id="query" name="q">

                        <button type="submit">Search</button>

                    </form>

                If the user enters:

                HTML

                the resulting URL may look like:

                /search?q=HTML

                If the user enters:

                HTML & CSS

                the browser URL-encodes the value appropriately.

                GET is commonly used for:

                Search
                Filtering
                Sorting

            ## POST Method

                The POST method sends form data in the request body rather than putting the submitted values in the URL query string.

                Example:

                    <form action="/register" method="post">
                        ...
                    </form>

                    POST is commonly used when submitting data such as:

                    Registration
                    Login
                    Creating records
                    Updating data
                    Sending messages

                    Important:

                    POST does not by itself make data encrypted or secure. HTTPS is used to protect data during transmission.


        3.target

            The target attribute specifies where the response should be displayed.

            Example:

            <form action="/submit" method="post" target="_blank">
                ...
            </form>

            Common values include:

                _self
                _blank
                _parent
                _top

            For example:

            target="_self"

            loads the response in the current browsing context.

            target="_blank"

            opens the response in a new browsing context.

        4.autocomplete

            The autocomplete attribute tells the browser whether it may automatically fill previously entered information.

            Example:

                <form autocomplete="on">

                To disable autocomplete for a form:

                <form autocomplete="off">

                Individual controls can also have their own autocomplete value.

        5.novalidate

            The novalidate attribute tells the browser not to perform its built-in form validation when the form is submitted.

            Example:

                <form novalidate>
                    ...
                </form>

                Normally, browsers perform validation for controls such as:

                <input type="email">
                <input required>

                With novalidate, the browser's built-in validation is skipped.

        6. enctype

            The enctype attribute specifies how form data is encoded when it is submitted.

            It is especially important when uploading files.

            Common values include:

            application/x-www-form-urlencoded
            multipart/form-data
            text/plain

            For file uploads, use:

            <form
                action="/upload"
                method="post"
                enctype="multipart/form-data">
            
            </form>

        ## The <input> Element

            The <input> element creates an input control.

            Example:

            <input type="text">

            <input> is a void element, so it does not have a closing tag.

            Correct:

            <input type="text">

            Not:

            <input></input>
        
        ##type Attribute

            The type attribute determines what kind of input control the browser should display.

            Example:

                <input type="text">

            Common input types include:

                text
                password
                email
                number
                radio
                checkbox
                date
                time
                datetime-local
                file
                range search tel url hidden submit reset button

        ## 1.Text Input

            Used to collect ordinary text.

            <input type="text">

            Example:

                <label for="name">Name:</label>
                <input type="text" id="name" name="name">

            input example:

            Dinesh
            
        ## 2. Password Input

            Used to collect passwords.

            <input type="password">

            Example:

                <label for="password">Password:</label>
                <input type="password" id="password" name="password">

            The browser visually hides the characters.

            For example:

            ••••••••


            type="password" only controls how the browser displays the input.

        ## 3. Email Input

            Used to collect an email address.

            <input type="email">

            Example:

                <label for="email">Email:</label>
                <input type="email" id="email" name="email">

            Browsers can perform basic email-format validation.

        ## 4. Number Input

            Used to collect numeric values.

            <input type="number">

        Example:

            <label for="age">Age:</label>
            <input type="number" id="age" name="age">

        You can specify a range:

            <input
                type="number"
                id="age"
                name="age"
                min="18"
                max="60">

        ## 5.Radio Button

            Radio buttons allow the user to select one option from a group.

            Example:

                <p>Gender:</p>

                <input type="radio" id="male" name="gender" value="male">
                <label for="male">Male</label>

                <input type="radio" id="female" name="gender" value="female">
                <label for="female">Female</label>

            The important part is:

            name="gender"

            Both radio buttons have the same name, so they belong to the same group.

            The user can select only one option from that group.

        ## 6. Checkbox

            A checkbox allows the user to select zero, one, or multiple options.

            Example:

                <p>Skills:</p>

                <input type="checkbox" id="html" name="skills" value="html">
                <label for="html">HTML</label>

                <input type="checkbox" id="css" name="skills" value="css">
                <label for="css">CSS</label>

                <input type="checkbox" id="javascript" name="skills" value="javascript">
                <label for="javascript">JavaScript</label>

            The user can select multiple options.

        ## 7.Date Input

            Used to select a date.

            <input type="date">

            Example:

                <label for="dob">Date of Birth:</label>
                <input type="date" id="dob" name="dob">

            The browser display a date picker.

        ## 8.Time Input

        Used to select a time.

            <input type="time">

        Example:

            <label for="time">Preferred Time:</label>
            <input type="time" id="time" name="time">

        ## 9.Datetime-Local

            Used to select a local date and time.

            <input type="datetime-local">

            Example:

                <label for="meeting">
                    Meeting Date and Time:
                </label>

                <input
                    type="datetime-local"
                    id="meeting"
                    name="meeting">

        ## 10. File Input

            Used to allow the user to select a file.

            <input type="file">

            Example:

            <label for="resume">Upload Resume:</label>

            <input
                type="file"
                id="resume"
                name="resume">

            For uploading files to a server, the form normally uses:

            <form
                action="/upload"
                method="post"
                enctype="multipart/form-data">

        ## 11. color input

                Allows the user to select a color.

                <input type="color">

                Example:

                    <label for="color">Choose a color:</label>
                    <input type="color" id="color" name="color">

        ## 12.Range Input

            Creates a slider.

                <input type="range">

                Example:

                <label for="volume">Volume:</label>

                <input
                    type="range"
                    id="volume"
                    name="volume"
                    min="0"
                    max="100">

                The user can move the slider between the specified values.

        ## 13.Search Input

            Used for search fields.

            <input type="search">

            Example:

            <label for="search">Search:</label>

            <input
                type="search"
                id="search"
                name="q">

        ## 14.Telephone Input

            Used for telephone numbers.

            <input type="tel">

            Example:

            <label for="phone">Phone:</label>

            <input
                type="tel"
                id="phone"
                name="phone">

        ## 15.URL Input

                Used to collect a URL.

                <input type="url">

                Example:

                    <label for="website">Website:</label>

                    <input
                        type="url"
                        id="website"
                        name="website">

                The browser can perform basic URL-format validation.

        ## 16.Hidden Input

            A hidden input is not displayed to the user but can contain a value that is submitted with the form.

            Example:

                <input
                    type="hidden"
                    name="user_id"
                    value="123">

            The user cannot see this control in the normal page interface.

    ## The name Attribute

        The name attribute is extremely important when submitting form data.

        Example:

            <input
                type="text"
                name="username">

        Suppose the user enters:

        Dinesh

        The submitted data contains a name-value pair similar to:

        username=Dinesh

        Without a name, a normal form submission does not include that control's value.

    ## The value Attribute

        The value attribute specifies the value associated with a control.

        Example:

            <input
                type="text"
                name="username"
                value="Dinesh">

        The input initially contains:

        Dinesh

        For radio buttons and checkboxes, value specifies the value submitted when that option is selected.

        Example:

            <input
                type="radio"
                name="gender"
                value="male">

        If selected, the submitted data can contain:

        gender=male

    ## The <label> Element

        The <label> element provides a text label for a form control.

        Example:

            <label for="name">
                Name:
            </label>

            <input
                type="text"
                id="name"
                name="name">


            <label for="name">Name:</label>
            <input id="name" type="text">

            The for value matches the input's id.

    ## Why Should We Use <label>?

        Labels improve:

            Accessibility
            Usability
            Form clarity

        The user can also click the label to focus or activate the associated control.

        For example:

            <label for="email">Email:</label>
            <input type="email" id="email" name="email">

        Clicking:

            Email:

            focuses the email field.

    ## <textarea>

        <textarea> is used for multi-line text input.

        Example:

            <label for="message">Message:</label>

            <textarea
                id="message"
                name="message"
                rows="5"
                cols="30">
            </textarea>

        It is useful for:

            Messages
            Comments
            Feedback
            Descriptions
            Addresses

        Unlike <input>, <textarea> has an opening and closing tag.

        <textarea>
        </textarea>

    ## <select>

        The <select> element creates a drop-down list.

        Example:

        <label for="country">Country:</label>

        <select id="country" name="country">
            <option value="india">India</option>
            <option value="usa">USA</option>
            <option value="uk">United Kingdom</option>
        </select>

        The user can select an option from the list.

    ## <option>

        The <option> element defines an item inside a <select>.

        Example:

        <select name="department">
            <option value="cse">Computer Science</option>
            <option value="aids">AI and Data Science</option>
            <option value="ece">Electronics</option>
        </select>

    ## selected

        The selected attribute makes an option selected by default.

        Example:

        <select name="department">

            <option value="cse">
                Computer Science
            </option>

            <option value="aids" selected>
                AI and Data Science
            </option>

        </select>

        The initial selected option is:

        AI and Data Science

    ## disabled

        The disabled attribute prevents a control from being used.

        Example:

            <input
                type="text"
                disabled>

        The user cannot interact with it.

        For an option:

            <option disabled>
                Select a department
            </option>

    ## readonly

        The readonly attribute prevents the user from editing a text-like input while still allowing its value to be submitted.

        Example:

        <input
            type="text"
            name="username"
            value="Dinesh"
            readonly>

    ## required

        The required attribute makes a field mandatory.

        Example:

        <input
            type="text"
            id="name"
            name="name"
            required>

        The browser prevents normal form submission if the required field is empty.

        Example:

        <label for="email">Email:</label>

        <input
            type="email"
            id="email"
            name="email"
            required>

    ## placeholder  

        The placeholder attribute displays temporary hint text inside an input.

        Example:

        <input
            type="text"
            placeholder="Enter your name">

        The user sees:

        | Enter your name |

        When the user starts typing, the placeholder disappears.

        Important:

        Placeholder text is a hint, not a replacement for a proper <label>.

    ## min and max

        These attributes specify minimum and maximum allowed values for applicable controls.

        Example:

        <input
            type="number"
            name="age"
            min="18"
            max="60">

        Another example:

        <input
            type="range"
            min="0"
            max="100">

    ## minlength and maxlength

        These attributes control the minimum and maximum number of characters for applicable text inputs.

        Example:

        <input
            type="text"
            name="username"
            minlength="3"
            maxlength="20">

        This means:

        Minimum → 3 characters
        Maximum → 20 characters

    ## step

        The step attribute controls the allowed increments for applicable numeric/date/time controls.

        Example:

        <input
            type="number"
            min="0"
            max="100"
            step="5">

        Possible values include:

        0
        5
        10
        15
        20
        ...
        100

    ## pattern

        The pattern attribute can specify a regular expression that the input value must match for built-in validation.

        Example:

        <input
            type="text"
            name="username"
            pattern="[A-Za-z]+">

        This example allows letters according to the specified pattern.

        Pattern validation is performed by the browser during normal form validation.

    ## Submit Button

        A submit button sends the form data.

        Example:

            <button type="submit">
                Submit
            </button>

        Another way is:

        <input type="submit" value="Submit">

        Both can create a submit control.

    ## <button>

        The <button> element creates a button.

        Example:

            <button type="submit">
                Submit
            </button>

        Common button types inside forms are:

            submit
            reset
            button
    
    ## use cases:

        Forms are used everywhere in web applications.

            Login

            Email
            Password
            [ Login ]


            Registration

            Name
            Email
            Password
            Confirm Password
            [ Register ]
            
            
            Search

            Search
            [ Search ]


            Contact

            Name
            Email
            Message
            [ Send ]


            E-commerce

            Customer Information
            Shipping Address
            Payment Information
            [ Place Order ]

# Responsive Web design

    Responsive Web Design (RWD) is an approach used to make a website automatically adjust its layout and content according to the screen size, device, and orientation.

    A responsive website should work properly on:

        -Desktop computers
        -Laptops
        -Tablets
        -Mobile phones
    
    Example:
        
        A personal profile website might look like this on different devices:
            -Desktop
            -Mobile

        The same HTML page is used, but CSS changes the layout according to the available screen width.

    ## Why is Responsive Design Important?

        Users access websites using different devices.

        For example:

        Desktop      → 1920px wide
        Laptop       → 1366px wide
        Tablet       → 768px wide
        Mobile       → 375px wide

        If a website is designed only for desktop, it may cause problems on mobile:

            -Content may overflow horizontally.
            -Text may become difficult to read.
            -Images may extend outside the screen.
            -Buttons may be difficult to click.
            -Navigation may not fit.
            -Users may need to zoom in and out.

        Responsive design solves these problems.

    ## HTML and CSS in Responsive Design

        Responsive design is mainly achieved using CSS, but HTML must provide a good structure for the CSS to work with.

            HTML
            ↓
            Structure and content

            CSS
            ↓
            Layout and responsive behavior

            Browser
            ↓
            Displays the page according to screen size

            For example:

                <div class="profile">
                    <img src="sample images/profile.png" alt="Profile">
                    
                    <div class="profile-info">
                        <h1>Dinesh</h1>
                        <p>AI and Data Science Student</p>
                    </div>
                </div>

            CSS can then change the layout depending on the screen size.


            How?
                1. Using Media Queries (The Screen Detectors)
                    CSS uses something called Media Queries. These are like filters that detect the screen width and apply different styles.For Phones: It tells the browser, "If the screen is small, stack the items."For Laptops: It tells the browser, "If the screen is wide, put them side-by-side."
                    
                2. How CSS Changes 
                    Using our HTML code, here is how the CSS would actually change the layout between a phone and a desktop computer.
                    
                    On a Mobile Phone (Small Screen)We want the profile picture on top and the text underneath it so it fits on a narrow screen.


                        /* Mobile First Style */
                            .profile {
                            display: flex;
                            flex-direction: column; /* Stacks the picture and text vertically */
                            align-items: center;    /* Centers everything */
                            text-align: center;
                            }

                            img {
                            width: 150px;           /* Makes the image a good size for a phone */
                            height: 150px;
                            }

                    On a Laptop/Desktop (Large Screen)When the screen gets wider than 768 pixels, the Media Query kicks in. It changes the direction so the picture is on the left and the text is on the right.css/* 
                    
                        Desktop Style */
                        @media (min-width: 768px) {
                        .profile {
                            flex-direction: row;  /* Changes the stack to a side-by-side row */
                            align-items: flex-start;
                            text-align: left;     /* Aligns text to the left */
                        }

                        img {
                            margin-right: 20px;   /* Adds space between the picture and the text */
                        }
                        }


        ##  Viewport

            One of the most important parts of responsive web design is the viewport.

            The viewport is the visible area of a webpage inside the browser window.

            For example:

            Desktop viewport
            ----------------------------------------
            |                                      |
            |            Web page                  |
            |                                      |
            ----------------------------------------


            Mobile viewport
            --------------------
            |                  |
            |    Web page      |
            |                  |
            --------------------

        ## Viewport Meta Tag

            For responsive websites, HTML commonly includes the following inside <head>:

            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            Example:

                <!DOCTYPE html>

                <html lang="en">

                <head>

                    <meta charset="UTF-8">

                    <meta name="viewport"
                        content="width=device-width, initial-scale=1.0">

                    <title>Personal Profile</title>

                </head>

                <body>

                    <h1>Dinesh</h1>

                </body>

                </html>

        ## What does it mean?

            <meta name="viewport"
                content="width=device-width, initial-scale=1.0">

            There are two important parts.

                ### width=device-width

                    Tells the browser:

                        Make the webpage viewport width equal to the device's screen width.

                        For example:

                        Mobile width = 375px

                        Viewport width
                            ↓
                        375px

                ### initial-scale=1.0
                
                    initial-scale=1.0

                    Sets the initial zoom level to normal.

                    So:

                        <meta name="viewport"
                            content="width=device-width, initial-scale=1.0">

                        helps the page display correctly on mobile devices.

        ## Responsive Images

            Images should also adjust to the available space.

            A common CSS rule is:

                img {
                    max-width: 100%;
                    height: auto;
                }
                max-width: 100%

            The image should not become wider than its containing element.

            height: auto

            The browser automatically maintains the image's original aspect ratio.

            Example:

            <img src="sample images/profile.png"
                alt="Profile image">

                img {
                    max-width: 100%;
                    height: auto;
                }

            Without this rule:

            ------------------------
            |      Container       |
            |                      |
            |   very large image  |
            |                      |
            ------------------------
                    overflow →

            With:

            max-width: 100%;

            the image fits inside the container.

        ## Responsive Widths:

            Avoid using fixed widths for everything.

            Less responsive

                .profile {
                    width: 1000px;
                }

                A 1000px element may not fit on a small mobile screen.

            More responsive

                .profile {
                    width: 100%;
                    max-width: 1000px;
                }

            Now:

                Large screen
                → can grow up to 1000px

                Small screen
                → shrinks to fit available space 

        ## Relative Units

            Responsive designs commonly use relative units instead of only fixed pixels.

            Common units include:

                %       → percentage
                em      → relative to font size
                rem     → relative to root font size
                vw      → viewport width
                vh      → viewport height

            Percentage

                .container {
                    width: 80%;
                }

                The container takes approximately 80% of its parent's width.

            vw
                .container {
                    width: 80vw;
                }

                vw means viewport width.

                1vw = 1% of viewport width

            vh

                .container {
                    height: 50vh;
                }     

                vh means viewport height.

                1vh = 1% of viewport height.

        ## Media Queries

            A media query allows CSS rules to be applied only when certain conditions are true.

            For responsive design, the most common condition is screen width.

            Example:

                body {
                    background-color: white;
                }

                @media (max-width: 600px) {

                    body {
                        background-color: lightgray;
                    }

                }

            This means:

                Screen width > 600px
                        ↓
                white background


                Screen width ≤ 600px
                        ↓
                lightgray background

        ## Basic Media Query Syntax

            @media (condition) {

                /* CSS rules */

            }

            Example:

            @media (max-width: 768px) {

                h1 {
                    font-size: 28px;
                }

            }

            The h1 font size becomes 28px when the viewport width is 768px or less.

        ## Show Different Images Depending on Browser Width

            1. What is the <picture> Element?

                The HTML <picture> element is used to provide multiple image sources and allow the browser to choose the most appropriate image based on conditions such as:

                    -Browser viewport width
                    -Screen size
                    -Device characteristics
                    -Image format support

                It is especially useful for Responsive Web Design.

                Instead of always loading the same image, we can provide different images for different screen sizes.

            2. Why Use Different Images for Different Screen Sizes?

                Consider a website displaying a large image.

                On a desktop:

                ----------------------------------------
                |                                      |
                |          LARGE FLOWER IMAGE          |
                |                                      |
                ----------------------------------------

                On a mobile phone:

                --------------------
                |                  |
                | SMALL FLOWER     |
                |     IMAGE        |
                |                  |
                --------------------

                If we use the large image on every device:

                    Desktop → Large image
                    Mobile  → Same large image

                The mobile device may download a large image even though it has a smaller screen.

                With <picture>:

                    Desktop → large image 
                    Tablet → medium image 
                    Mobile → small image

                This can provide a better responsive image strategy.

                The basic structure is:

                    <picture>

                        <source srcset="image1.jpg" media="condition">

                        <source srcset="image2.jpg" media="condition">

                        <img src="default.jpg" alt="Description">

                    </picture>

                    The <picture> element contains:

                        -One or more <source> elements
                        -One <img> element

                    example

                        <picture>

                            <source
                                srcset="img_smallflower.jpg"
                                media="(max-width: 600px)">

                            <source
                                srcset="img_flowers.jpg"
                                media="(max-width: 1500px)">

                            <source
                                srcset="flowers.jpg">

                            <img
                                src="img_smallflower.jpg"
                                alt="Flowers">

                        </picture>

                            The browser checks the <source> elements and chooses an appropriate image.

                    ## breaking down

                        <picture>

                            -This creates a container for multiple possible image sources.

                            -It does not itself display an image.

                            -The actual image is displayed using the <img> element.

                        <source
                            srcset="img_smallflower.jpg"
                            media="(max-width: 600px)">

                            The <source> element provides an alternative image source.

                        <srcset>

                            srcset="img_smallflower.jpg"

                            srcset specifies the image file that the browser can use.

                            For example:

                                <source srcset="mobile.jpg">

                                means:

                                Use mobile.jpg as this source when its conditions are satisfied.

                        <media>

                            media="(max-width: 600px)"

                            This is a media condition.

                            It means:

                                This source can be used when the viewport width is 600px or less.

                            For example:

                                <source
                                    srcset="small.jpg"
                                    media="(max-width: 600px)">

                                The browser checks:

                                Is viewport width ≤ 600px?
                                        |
                                    YES
                                        ↓
                                Use small.jpg

                        ### Multiple Media Conditions

                            We can provide multiple sources.

                                <picture>

                                    <source
                                        srcset="small.jpg"
                                        media="(max-width: 600px)">

                                    <source
                                        srcset="medium.jpg"
                                        media="(max-width: 1500px)">

                                    <img
                                        src="large.jpg"
                                        alt="Flowers">

                                </picture>

                            The intended behavior is:

                                Viewport width

                                ≤ 600px
                                ↓
                                small.jpg


                                601px – 1500px
                                ↓
                                medium.jpg

                                > 1500px 
                                ↓ 
                                large.jpg

                    ### Why Does the Order Matter?

                        The browser evaluates the <source> elements in order.

                        For example:

                        <picture>

                            <source srcset="small.jpg"
                                    media="(max-width: 600px)">

                            <source srcset="medium.jpg"
                                    media="(max-width: 1500px)">

                            <img src="large.jpg"
                                alt="Flowers">

                        </picture>

                        Suppose the viewport is:

                            500px

                            The browser checks:

                            small.jpg
                            media = max-width: 600px

                            500 ≤ 600
                                ↓
                            MATCH

                            So it uses:

                            small.jpg

                            It doesn't continue looking for another matching source.

                    ### Why Is <img> Required?

                        The <img> element is the fallback/default image.

                        Example:

                            <picture>

                                <source
                                    srcset="small.jpg"
                                    media="(max-width: 600px)">

                                <source
                                    srcset="medium.jpg"
                                    media="(max-width: 1500px)">

                                <img
                                    src="large.jpg"
                                    alt="Flowers">

                            </picture>

                        The <img> is important because it provides the image that should be displayed when none of the <source> conditions are selected.

                        It also provides the required image element and its alt text.

        ## Responsive Text Size

            Responsive text size means changing the size of text according to the screen or viewport size. This helps make text readable and properly fit on different devices such as desktops, tablets, and mobile phones.

            Example

                <h1>Responsive Text</h1>
                <p>This text adjusts according to the screen size.</p>
                h1 {
                    font-size: 40px;
                }

                p {
                    font-size: 20px;
                }

                @media (max-width: 600px) {

                    h1 {
                        font-size: 28px;
                    }

                    p {
                        font-size: 16px;
                    }

                }

            ### How It Works

                On a larger screen:

                    Desktop
                        ↓
                    Heading → 40px
                    Paragraph → 20px

                    On a screen width of 600px or less:

                    Mobile
                        ↓
                    Heading → 28px
                    Paragraph → 16px

                The @media rule allows us to change the font size when the viewport becomes smaller.

            ### Using vw for Responsive Text

                The vw unit can also be used to make text size change according to the viewport width.

                h1 {
                    font-size: 5vw;
                }

                vw means viewport width.

                1vw = 1% of the viewport width

                Therefore, when the browser width changes, the text size also changes.

            ### Using clamp()

                clamp() can be used to create flexible text while keeping it within a minimum and maximum size.

                    h1 {
                        font-size: clamp(28px, 5vw, 50px);
                    }

                Here:

                    28px → minimum font size
                    5vw → preferred flexible size
                    50px → maximum font size

                This prevents the text from becoming too small on mobile or too large on desktop.

# HTML Responsive Layout

    A responsive layout is a webpage layout that automatically adjusts its size, position, and arrangement according to the screen or viewport size. It allows a webpage to display properly on mobile phones, tablets, laptops, and desktop computers.

    ## Responsive Layout Elements

        HTML provides elements that can be used to organize the structure of a webpage:

        <header>Header</header>
        <nav>Navigation</nav>

        <main>
            <section>
                <h2>About Me</h2>
                <p>My introduction</p>
            </section>

            <section>
                <h2>Projects</h2>
                <p>My projects</p>
            </section>
        </main>

        <footer>Footer</footer>

        These HTML elements provide the structure and content. CSS is used to make their layout responsive.

    ## Responsive Layout Techniques

        1. Flexbox

            Flexbox is used to arrange elements in flexible rows or columns.

            .container {
                display: flex;
                gap: 20px;
            }

        2. CSS Grid

            Grid is useful for creating layouts with rows and columns.

            .container {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
            }

        3. Media Queries

            Media queries allow the layout to change according to the viewport size.

                @media (max-width: 600px) {

                    .container {
                        grid-template-columns: 1fr;
                    }

                }

            On smaller screens, the three-column layout changes into a single-column layout.

        4. Relative Units

            Relative units allow elements to adjust according to their parent or viewport.

            Common units include:

            %    → Percentage
            rem  → Relative to root font size
            vw   → Viewport width
            vh   → Viewport height

            Example:

            .container {
                width: 90%;
            }

        5. Responsive Images

            Images should not overflow their containers.

            img {
                max-width: 100%;
                height: auto;
            }

            This allows the image to shrink when the available space becomes smaller.

            Example of a Responsive Layout

                <div class="container">

                    <div>About Me</div>
                    <div>Skills</div>
                    <div>Projects</div>

                </div>
                .container {
                    display: flex;
                    gap: 20px;
                }

                .container div {
                    flex: 1;
                }

                @media (max-width: 600px) {

                    .container {
                        flex-direction: column;
                    }

                }

            Layout Behavior

            Desktop:

                ------------  ------------  ------------
                | About Me |  |  Skills  |  | Projects |
                ------------  ------------  ------------

            Mobile:

            ------------
            | About Me |
            ------------
            |  Skills  |
            ------------
            | Projects |
            ------------

# HTML Graphics

        HTML graphics are used to draw and display graphical content directly on a webpage. HTML provides two main technologies for creating graphics: Canvas and SVG.

        Types of HTML Graphics

            The two main ways to create graphics in HTML are:

                1.<canvas>
                2.<svg>
            
            1.Canvas

                The <canvas> element creates a drawing area on a webpage. Graphics are drawn inside the canvas using JavaScript.

                Syntax

                    <canvas id="myCanvas" width="300" height="150"></canvas>

                    The <canvas> element itself only creates the drawing area. JavaScript is required to draw shapes, lines, text, images, and other graphics.

                example

                    <canvas id="myCanvas" width="300" height="150"></canvas> 
                        <script> const canvas = document.getElementById("myCanvas");
                            const ctx = canvas.getContext("2d"); 
                            ctx.fillStyle = "blue"; 
                            ctx.fillRect(50, 30, 150, 80); 
                        </script>

                explaination

                    <canvas> ---> Creates the drawing area 
                    
                    getContext("2d") ---> Gets the 2D drawing context 
                    
                    fillRect() ---> Draws a rectangle

                    Canvas is commonly used for:

                        -Games
                        -Animations
                        -Dynamic graphics
                        -Data visualization
                        -Image manipulation 

            2. SVG (Scalable Vector Graphics)

                SVG (Scalable Vector Graphics) is used to create vector graphics directly in HTML.

                SVG graphics are scalable, and do not lose any quality if they are zoomed or resized.

                SVG is supported by all major browsers.

                SVG integrates with other standards, such as CSS, DOM, XSL and JavaScript.

                SVG graphics are made using elements such as:

                    <rect> – rectangle
                    <circle> – circle
                    <line> – line
                    <polygon> – polygon
                    <path> – complex shapes
                    
                Example

                    <svg width="300" height="150">

                        <rect
                            x="50"
                            y="30"
                            width="150"
                            height="80"
                            fill="blue">
                        </rect>

                    </svg>

                    This creates a blue rectangle.

                SVG is commonly used for:

                    -Logos
                    -Icons
                    -Diagrams
                    -Charts
                    -Maps
                    -Scalable illustrations

# Multimedia

    ## What is HTML Multimedia?

        HTML Multimedia refers to adding and displaying multimedia content such as:

            -Audio
            -Video
            -Movies
            -Music
            -Podcasts
            -Subtitles and captions
            -External multimedia content

        HTML provides built-in elements such as:

            -<audio> → plays audio
            -<video> → plays video
            -<source> → provides multiple media files
            -<track> → adds subtitles, captions, descriptions, or other timed text
            -<iframe> → embeds external multimedia content such as YouTube videos

        Modern HTML allows browsers to play audio and video without requiring external plugins.

    ##Why HTML Multimedia is Used

        Multimedia makes a webpage more interactive and useful.

            For example:

                -A portfolio can contain an introduction video.
                -A website can provide podcasts.
                -An educational website can provide lecture videos.
                -A music website can play audio.
                -A video can contain subtitles for accessibility.
                -A product page can show a product demonstration.
                
                
    ## HTML <audio> Element

        The <audio> element is used to embed audio content in a webpage.

        Basic Syntax

            <audio controls>
                <source src="music.mp3" type="audio/mpeg">
            </audio>

            Explanation

            <audio controls> ---> Creates an audio player.

            <source src="music.mp3" type="audio/mpeg"> ---> Specifies the audio file.

            controls ---> Displays the browser's audio controls.

            The browser normally provides controls such as:

                Play
                Pause
                Volume
                Progress bar

    ## Audio Without <source>

            You can also directly specify the audio file using src.

            <audio src="music.mp3" controls></audio>

            This is simpler when you have only one audio format.

            However, <source> is useful when you want to provide multiple formats.

    ## Audio controls Attribute

            The controls attribute tells the browser to display the audio controls.

                <audio controls>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

            Without controls:

                <audio>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

            The audio element exists, but the browser does not normally provide visible playback controls.

            Therefore, for a normal audio player:

                <audio controls>

            is commonly used.

    ## Common Audio Attributes

            The <audio> element supports several useful attributes.

            Attribute   --->    Purpose
            controls	--->    Displays audio controls
            autoplas    --->    Starts playback automatically
            loop    --->    Repeats the audio
            muted   --->	Starts the audio muted
            preload ---> Gives the browser a hint about loading the audio
            src    --->    Specifies the audio file
    
    ## Audio autoplay

            autoplay tells the browser to start the audio automatically.

                <audio controls autoplay>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

            However, browsers often restrict autoplay with sound because unexpected audio can disturb users.

            Therefore, autoplay should be used carefully.

    ## Audio loop

            The loop attribute causes the audio to repeat after it finishes.

                <audio controls loop>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

            Flow:

            Audio starts
                ↓
            Audio finishes
                ↓
            Audio starts again
                ↓
            Repeats


    ## Audio muted

            The muted attribute starts the audio with its volume muted.

                <audio controls muted>
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

            It can also be useful when autoplay is required and the browser permits muted autoplay.

    
    ## Audio preload

            preload provides the browser with a hint about how much audio should be loaded before the user plays it.

            none

                <audio controls preload="none">
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

                The browser should avoid preloading the audio.

            metadata

                <audio controls preload="metadata">
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

                The browser can load information such as:

                    -Duration
                    -Metadata

                but does not need to load the entire audio.

            auto

                <audio controls preload="auto">
                    <source src="music.mp3" type="audio/mpeg">
                </audio>

                The browser may load the audio in advance.

                preload is only a hint. The browser can make its own decision.

    ## Audio Formats

            Common audio formats include:

                Format	MIME Type	Extension
                MP3	audio/mpeg	.mp3
                WAV	audio/wav	.wav
                Ogg	audio/ogg	.ogg

            Example:

                <audio controls>
                    <source src="music.mp3" type="audio/mpeg">
                    <source src="music.ogg" type="audio/ogg">

                    Your browser does not support audio.
                </audio>

            The browser checks the available sources and uses a supported format.

    ## Fallback Text for Audio

            You can provide text inside the <audio> element.

                <audio controls>
                    <source src="music.mp3" type="audio/mpeg">

                    Your browser does not support audio.
                </audio>

            If the browser cannot use the audio element, the fallback text can be displayed.

    ## Video controls

        <video controls>
            <source src="movie.mp4" type="video/mp4">
        </video>

        The controls usually include:

            Play/Pause
            Volume
            Video progress
            Fullscreen
            Other browser-provided controls

        Without controls, the browser does not normally provide visible playback controls.

    ## Video width and height

        You can specify the dimensions of a video.

            <video width="600" height="400" controls>
                <source src="movie.mp4" type="video/mp4">
            </video>

        However, for responsive websites, CSS is generally better than fixed HTML dimensions.

        Example:

            video {
                max-width: 100%;
                height: auto;
            }

        This prevents the video from becoming wider than its container.

    ## Video autoplay

        <video controls autoplay>
            <source src="movie.mp4" type="video/mp4">
        </video>

        The video attempts to start automatically.

        However, browsers commonly restrict autoplay when the video has sound.

        A common pattern is:

        <video controls autoplay muted>
            <source src="movie.mp4" type="video/mp4">
        </video>

    ## Video loop

        The loop attribute makes the video repeat.

        <video controls loop>
            <source src="movie.mp4" type="video/mp4">
        </video>

        When the video finishes, it starts again.

    ## Video muted

        <video controls muted>
            <source src="movie.mp4" type="video/mp4">
        </video>

        The video starts without sound.

        This is particularly common with videos intended to autoplay.

    ## Video poster

        The poster attribute specifies an image displayed before the video starts.

        <video
            controls
            width="600"
            poster="video-thumbnail.jpg">

            <source src="movie.mp4" type="video/mp4">

        </video>

        The flow is:

        Before video starts
            ↓
        Poster image displayed
            ↓
        User presses Play
            ↓
        Video starts

        A poster is useful for:

            -Video thumbnails
            -Preview images
            -Branding
            -Better visual presentation
    
    ##Video preload

        Like audio, video supports preload.

        None

            <video controls preload="none">
                <source src="movie.mp4" type="video/mp4">
            </video>

        Metadata

            <video controls preload="metadata">
                <source src="movie.mp4" type="video/mp4">
            </video>

        Auto

            <video controls preload="auto">
                <source src="movie.mp4" type="video/mp4">
            </video>

        Again, preload is a hint to the browser rather than an absolute command.

    ## Video Formats

        Common video formats include:

        Format	MIME Type	Extension
        MP4	video/mp4	.mp4
        WebM	video/webm	.webm
        Ogg	video/ogg	.ogv

        Example:

        <video controls width="600">

            <source src="movie.mp4" type="video/mp4">

            <source src="movie.webm" type="video/webm">

            Your browser does not support video.

        </video>

        The browser can choose a source it supports.

    ## The <source> Element

        The <source> element specifies a media resource for <audio> or <video>.

        Example:

        <video controls>

            <source src="movie.mp4" type="video/mp4">
            <source src="movie.webm" type="video/webm">

        </video>

        The browser checks the sources and selects an appropriate one.

        Important

        <source> is a void element, so it does not have a closing tag.

        Correct:

        <source src="movie.mp4" type="video/mp4">

        Not:

        <source></source>

    ## Why Use Multiple <source> Elements?

        Different browsers or devices may support different media formats.

        For example:

            <video controls>

                <source src="movie.mp4" type="video/mp4">
                <source src="movie.webm" type="video/webm">

            </video>

        Conceptually:

        Browser
        ↓
        Can I use movie.mp4?
        ↓
        Yes → use it

        If not
        ↓
        Can I use movie.webm?
        ↓
        Yes → use it

        This improves compatibility.

        24. The <track> Element

        The <track> element adds timed text to video or audio.

        It is commonly used for:

            -Subtitles
            -Captions
            -Descriptions
            -Chapters
            -Other timed text

        Example:

            <video controls width="600">

                <source src="lesson.mp4" type="video/mp4">

                <track
                    src="subtitles.vtt"
                    kind="subtitles"
                    srclang="en"
                    label="English">

            </video>

    ## Understanding <track> Attributes

        src

        Specifies the WebVTT file.

        src="subtitles.vtt"
        kind

        Specifies the type of text track.

        Common values include:

            -subtitles
            -captions
            -descriptions
            -chapters
            -metadata
            -srclang

        Specifies the language.

        srclang="en"
        label

        Specifies the name shown to the user.

        label="English"
        default

        Specifies that the track should be selected by default.

        default

        Complete example:

        <track
            src="subtitles-en.vtt"
            kind="subtitles"
            srclang="en"
            label="English"
            default>

    ## WebVTT

        WebVTT stands for:

        Web Video Text Tracks

        It is commonly used with the <track> element.

        Example file:

        WEBVTT

        00:00:00.000 --> 00:00:04.000
        Hello, welcome to my website.

        00:00:04.000 --> 00:00:08.000
        I am learning web development.

        Save it as:

        subtitles.vtt

        Then use it:

        <video controls>

            <source src="lesson.mp4" type="video/mp4">

            <track
                src="subtitles.vtt"
                kind="subtitles"
                srclang="en"
                label="English">

        </video>

    ##Complete Video with Subtitles

        HTML
        <video
            controls
            width="600"
            poster="thumbnail.jpg">

            <source src="lesson.mp4" type="video/mp4">

            <track
                src="subtitles.vtt"
                kind="subtitles"
                srclang="en"
                label="English"
                default>

            Your browser does not support video.

        </video>
        subtitles.vtt
        WEBVTT

        00:00:00.000 --> 00:00:03.000
        Hello everyone.

        00:00:03.000 --> 00:00:06.000
        Welcome to my HTML tutorial.

        00:00:06.000 --> 00:00:10.000
        Today we are learning HTML multimedia.

    ## HTML <iframe> for Multimedia

        An <iframe> can embed external content into a webpage.

        A common example is embedding a YouTube video.

        Example:

        <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/example"
            title="HTML Tutorial"
            allowfullscreen>
        </iframe>

        The external website provides the video player.

    

