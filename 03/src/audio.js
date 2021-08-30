
import s1 from "./media/audio/1.mp3";
import s2 from "./media/audio/2.mp3";
import s3 from "./media/audio/3.mp3";

let sounds = [];

[
    { file: s1, desc: "Восход" },
    { file: s2, desc: "Ручей" },
    { file: s3, desc: "Вечерние Сверчки" },
].forEach(el => {
    sounds.push(
        `<div class="item">
            <div class="audio">
                <audio controls>
                    <source src="${el.file}">
                </audio>
            </div>
            <div class="desc">
                <p>${el.desc}</p>
            </div>
        </div>`
    )
});

export default sounds;

