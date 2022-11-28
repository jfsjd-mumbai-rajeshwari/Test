

function checkluck() {
    var Result= Math.floor(Math.random() * 9) + 1;
    document.getElementById('result').innerHTML = Result;
    let img = document.createElement("img");

    switch(Result){
        case 1:
            img.src="Resources\Images\Arya.jpg";
            document.body.appendChild(img);
            break;
            case 2:
            img.src="Resources\Images\Devo.jpg";
            document.body.appendChild(img);
            break;
            case 3:
            img.src="Resources\Images\Diksha.jpg";
            document.body.appendChild(img);
            break;
            case 4:
            img.src="Resources\Images\Lara.jpg";
            document.body.appendChild(img);
            break;
            case 5:
            img.src="Resources\Images\Mahi.jpg";
            document.body.appendChild(img);
            break;
            case 6:
            img.src="Resources\Images\Pooja.jpg";
            document.body.appendChild(img);
            break;
            case 7:
            img.src="Resources\Images\Prathyusha.jpg";
            document.body.appendChild(img);
            break;
            case 8:
            img.src="Resources\Images\Priya.jpg";
            document.body.appendChild(img);
            break;
            case 9:
            img.src="Resources\Images\Riya.jpg";
            document.body.appendChild(img);
            break;
            case 10:
            img.src="Resources\Images\Rucha.jpg";
            document.body.appendChild(img);
            break;
    }
}

