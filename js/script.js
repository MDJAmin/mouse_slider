"use strict"
const track = document.querySelector("#image-track");

const handleOnDown = (e)=>{
    track.dataset.mouseDownAt = "0";
    track.dataset.prevPercentage = track.dataset.percentage;
};
