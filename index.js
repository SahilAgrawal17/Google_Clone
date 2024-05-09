const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event){
    if(event.code === "Enter"){
        search();
    }
});

function search(){
    const input = searchInput.value;
    window.location.href = "https://www.google.co.in/search?q=" + input + "&sca_esv=abf976e12d8dcb8e&sca_upv=1&sxsrf=ADLYWILuSQzCDilylnUK2nrlzzPdT_bdyQ%3A1715269949546&source=hp&ei=PfE8ZrzyHpPm2roP4s276Aw&iflsig=AL9hbdgAAAAAZjz_TTRRygdJARM8K63uJ45yTeSW7szq&ved=0ahUKEwj8hKPA9oCGAxUTs1YBHeLmDs0Q4dUDCBU&uact=5&oq=" +input+ "&gs_lp=Egdnd3Mtd2l6IgVoZWxsbzIKECMYgAQYJxiKBTIKECMYgAQYJxiKBTIREC4YgAQYkQIYsQMYyQMYigUyERAuGIAEGJECGLEDGIMBGIoFMg0QABiABBixAxhDGIoFMgoQABiABBhDGIoFMgoQLhiABBhDGIoFMhAQLhiABBjRAxhDGMcBGIoFMgsQABiABBiSAxiKBTIKEAAYgAQYFBiHAkiEB1C0AVjGBXABeACQAQCYAbsBoAHGBaoBAzAuNLgBA8gBAPgBAZgCBaAC4AWoAgrCAgcQIxgnGOoCwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxjRAxiDARjHAcICEBAAGIAEGLEDGEMYgwEYigXCAgsQLhiABBixAxiDAcICCxAuGIAEGJECGIoFwgIQEC4YgAQYsQMYQxiDARiKBZgDCpIHAzEuNKAHwTE&sclient=gws-wiz"
}