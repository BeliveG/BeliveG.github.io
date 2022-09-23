$.ajax({
    method: "GET",
    url: "./data/data.json",
    success(data) {
        // console.log(data);
        data.forEach(item => {
            // console.log(item.files);
            item.files.forEach(ele => {
                console.log(ele);
                let str = `
                <li><a href="./detail.html?path=${ele.path}">${ele.title}</a></li>
                `
                $("ul").append($(str))
            })
        })
    }
})