const READ=1;
const WRITE=2;
const DELETE=4;

let permissions = 0;

const read=document.getElementById('read');
const write=document.getElementById('write');
const delete_permission=document.getElementById('delete');
const permission_value=document.getElementById('permissionValue');


read.addEventListener("change",()=>{
    if (read.checked){
        permissions = permissions | READ;
    }
    else{
        permissions = permissions & ~READ;
    }
      permission_value.textContent = permissions;
})

write.addEventListener("change", () => {
  if (write.checked) {
    permissions = permissions | WRITE;
  } else {
    permissions = permissions & ~WRITE;
  }

  permission_value.textContent = permissions;
});

delete_permission.addEventListener("change", () => {
  if (delete_permission.checked) {
    permissions = permissions | DELETE;
  } else {
    permissions = permissions & ~DELETE;
  }

  permission_value.textContent = permissions;
});