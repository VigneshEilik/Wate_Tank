function solve() {
    const arr = document.getElementById("input").value
        .split(",")
        .map(Number);

    const n = arr.length;
    let left = 0, right = n - 1;
    let leftMax = 0, rightMax = 0;
    let water = 0;

    while (left < right) {
        if (arr[left] < arr[right]) {
            leftMax = Math.max(leftMax, arr[left]);
            water += leftMax - arr[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, arr[right]);
            water += rightMax - arr[right];
            right--;
        }
    }

    document.getElementById("result").innerText =
        `Total Water Stored: ${water} Units`;

    drawSVG(arr);
}

function drawSVG(arr) {
    const svg = document.getElementById("svg");
    svg.innerHTML = "";

    const barWidth = 40;
    const maxHeight = Math.max(...arr);

    arr.forEach((h, i) => {
        // Block
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", i * barWidth);
        rect.setAttribute("y", 250 - h * 30);
        rect.setAttribute("width", barWidth - 5);
        rect.setAttribute("height", h * 30);
        rect.setAttribute("fill", "#444");
        svg.appendChild(rect);
    });
}
