(function(){
    const params = {
        headers: {
            Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2ctZmllbGQtYXBpLmdvbGZ6b24uY29tIiwiYWRtaW5JZCI6ImhpbGxjY0BoaWxsY2MuY29tIiwiZ29sZkNsdWJTZXEiOjYsImdvbGZDbHViS2V5IjoiQzAwMSIsImFkbWluU2VxIjoxMDQsImV4cCI6MTY4NDkyMTEwNCwiYXV0aG9yaXR5R3JvdXBTZXEiOjd9.Lv9EftgInKpomX_GH7wr1WloYoXLaFkb4S7VGlusDrc"
        }
    };
    document.addEventListener("DOMContentLoaded", () => {
        fetch("https://g-field-api-qa.spazon.com/v1/coursecontrol/golfclub", params)
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                localStorage.removeItem("testClubData");
                localStorage.setItem("testClubData", JSON.stringify(response.contents));
            })
            .catch((error) => {
                console.error('error', error);
                alert('error', error);
            })
    })

    const imgViewBox = document.querySelector(".viewBox .img");
    const dataViewBox = document.querySelector(".viewBox .data");
    const imgLoadBtn = document.querySelector(".imgLoadButton");
    const dataViewBtn = document.querySelector(".dataViewBtns");

    imgLoadBtn.querySelectorAll("button").forEach((item) => {
        item.addEventListener('click', (event) => {
            const imgEl = getImg(event);

            imgViewBox.innerHTML = "";
            imgViewBox.appendChild(imgEl)
        });
    });

    dataViewBtn.querySelectorAll("button").forEach((item) => {
        item.addEventListener("click", (event) => {
            const targetData = getData(event);

            dataViewBox.innerHTML = "";
            dataViewBox.innerHTML = JSON.stringify(targetData)
        })
    })



    const getImg = (event) => {
        const img = document.createElement("img");
        const { imgFolder, imgName } = event.target.dataset;
        img.src = `https://g-field-file.spazon.com/coursephoto/B001/${imgFolder}/hole/${imgName}.png`;
        
        return img;
    };

    const getData = (event) => {
        const { idx } = event.target.dataset;
        const data = JSON.parse(localStorage.getItem("testClubData"));

        return data.courses[idx];
    }

    console.log('1');
    console.log('2');
})();