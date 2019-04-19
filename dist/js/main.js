// import { styles } from './map.styles'

window.addEventListener('DOMContentLoaded', init)

let map;
let marker;

let kyivLatLng = {lat: 50.43883937, lng: -329.47577477};
let newYorkLatLng = {lat: 40.7143528, lng: -74.0059731};
let barcelonaLatLng = {lat: 41.37747677, lng: 2.17725635};
let romaLatLng = {lat: 41.90144656, lng: 12.4979353};

function init() { 
    changeActiveTab(0)
    changeActiveLocation(0)
}

function initMap() {
    
    map = new google.maps.Map(document.getElementById('map'), {
        center: kyivLatLng,
        zoom: 12,
        disableDefaultUI: true,        
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#212121"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "administrative.country",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "administrative.locality",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#181818"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#1b1b1b"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#2c2c2c"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#8a8a8a"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#373737"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#3c3c3c"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.highway.controlled_access",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#4e4e4e"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "transit",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#3d3d3d"
                    }
                ]
            }
        ]
    });  

    marker = new google.maps.Marker({
        position: kyivLatLng,
        map: map,
        draggable: true,
        animation: google.maps.Animation.DROP,
        icon: '../img/placeholder.png',
        title: 'Hello World!'
    });
    
    marker.setMap(map);
}  

let changeTab = (tab) => {
    console.log(tab)
    changeActiveTab(tab);
    changeActiveLocation(tab);

    switch (tab) {
        case 0:
            setMap(kyivLatLng);
            break;
        case 1:
            setMap(newYorkLatLng);         
            break;
        case 2:
            setMap(barcelonaLatLng);         
            break;
        case 3:
            setMap(romaLatLng);         
            break;
    
    }
}

let setMap = (coords) => {
    map.setCenter(coords); 
    marker = new google.maps.Marker({
        position: coords,
        map: map,
        icon: '../img/placeholder.png',
        title: 'Our office'
    });
    marker.setMap(map);
}

let changeActiveTab = (tab) => {
    let tabs = document.querySelectorAll('.tabs-item');
    let activeTab = tabs[tab];

    tabs.forEach(element => {
        if(element.classList.contains('active')) {
            element.classList.remove('active')
        }
    });

    activeTab.classList.add('active')
}

let changeActiveLocation = (tab) => {
    let locations = document.querySelectorAll('.location');
    let activeLocation = locations[tab];

    locations.forEach(element => {
        if(element.classList.contains('visible-location')) {
            element.classList.remove('visible-location')
        }
    });

    activeLocation.classList.add('visible-location')  
}

let validMail = (value) => {
    let regExpMail = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let valid = regExpMail.test(value);

    if(value) {

        if (!valid) {
            document.querySelector('.error-mail').innerHTML = 'Введите корректный email!';
            document.querySelector('.mail-input').classList.add('error-input')
        } else {
            document.querySelector('.error-mail').innerHTML = '';
            document.querySelector('.mail-input').classList.remove('error-input')
        }

    } else {
        document.querySelector('.error-mail').innerHTML = 'Не оставляйте это поле пустым!';
    }

    return valid;
}

let validPhone = (value) => {
    let regExpPhone = /^\d[\d\(\)\-]{8,14}\d$/;
    let valid = regExpPhone.test(value);

    if(value) {

        if (!valid) {
            document.querySelector('.error-phone').innerHTML = 'Номер телефона введен неправильно!';
            document.querySelector('.phone-input').classList.add('error-input')
        } else {
            document.querySelector('.error-phone').innerHTML = '';
            document.querySelector('.phone-input').classList.remove('error-input')
        }

    } else {
        document.querySelector('.error-phone').innerHTML = 'Введите номер телефона!';
    }

    return valid;
}  

let checkForm = () => {
    let name = document.querySelector('.name').value;
    let phone = document.querySelector('.phone').value;
    let email = document.querySelector('.email').value;
    let checkbox = document.querySelector('.checkbox').checked

    let button = document.querySelector('.send-form-btn')

    if(name && phone && email && checkbox && validPhone(phone) && validMail(email)) {
        button.disabled = false;
        button.classList.add('active-btn')
    } else {
        button.disabled = true;
        button.classList.remove('active-btn')
    }
}


let sendForm = (event) => {
    event.preventDefault();
    fetch('http://httpbin.org/post', { method: 'POST'})
    .then(function({ status }) {
        status && status === 200 ? activateNotify(true) : activateNotify(false)
    })
    .then(() => {
        let checkbox = document.querySelector('.checkbox')
        let button = document.querySelector('.send-form-btn')

        document.querySelector('.name').value = ''
        document.querySelector('.phone').value = '';
        document.querySelector('.email').value = '';
        checkbox.checked = false;
        button.disabled = true;
        button.classList.remove('active-btn');
    })
}


let activateNotify = (type) => {
    let notify = document.querySelector('.notify')
    
    console.log(type)
    console.log(notify)


    if(type) {
        notify.innerHTML = "Ваша заявка принята"
        notify.classList.add('success')
        setTimeout(() => {
            notify.classList.remove('success')
        }, 2000);
    } else {
        notify.innerHTML = "Неизвестная ошибка, попробуйте снова"
        notify.classList.add('error')
        setTimeout(() => {
            notify.classList.remove('error')
        }, 2000);
    }
}

const anchor = document.querySelector('a[href="#contact-form"]'),
      animationTime = 200,
      framesCount = 20;


anchor.addEventListener('click', function(e) {
    e.preventDefault();

    let coordY = anchor.getBoundingClientRect().top + 500;
    
    let scroller = setInterval(function() {
      let scrollBy = coordY / framesCount;
      
      if(scrollBy > window.pageYOffset - coordY && window.innerHeight + window.pageYOffset < document.body.offsetHeight) {
        window.scrollBy(0, scrollBy);
      } else {
        window.scrollTo(0, coordY);
        clearInterval(scroller);
      }
    }, animationTime / framesCount);
})

    




