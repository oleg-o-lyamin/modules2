
import images from "./images";
import sounds from "./audio";
import videos from "./videos";

const mainDiv = document.getElementById("main");

mainDiv.innerHTML = images.join('') + sounds.join('') + videos.join('');

import "./main.scss";