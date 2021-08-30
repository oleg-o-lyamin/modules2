
import v1 from "./media/video/1.mp4";
import v2 from "./media/video/2.mp4";

let videos = [];

[
    { file: v1, desc: "Клип" },
    { file: v2, desc: "Прибой" },
].forEach(el => {
    videos.push(
        `<div class="item">
            <video controls>
                <source src="${el.file}">
            </video>
            <div class="desc">
                <p>${el.desc}</p>
            </div>
        </div>`
    )
});

export default videos;

