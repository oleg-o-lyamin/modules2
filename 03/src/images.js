
import i1 from "./media/images/1.jpg";
import i2 from "./media/images/2.jpg";
import i3 from "./media/images/3.jpg";
import i4 from "./media/images/4.gif";

let images = [];

[
    { file: i1, desc: "Мельница у реки" },
    { file: i2, desc: "Снежные вершины" },
    { file: i3, desc: "Скадинавский канал" },
    { file: i4, desc: "Эверест" }
].forEach(el => {
    images.push(
        `<div class="item">
            <div class="image">
                <img src="${el.file}" />
            </div>
            <div class="desc">
                <p>${el.desc}</p>
            </div>
        </div>`
    )
});

export default images;

