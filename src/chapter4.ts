//타입 별칭

type User = {
    id : number,
    name : string,
    nickName : string,
    birth : string,
    bio : string,
    location : string
}


let user : User = {
    id : 1,
    name : "김민서",
    nickName : "aa",
    birth : "1986.06.07",
    bio : "안녕하세요",
    location : "부산시"
}

//인덱스 시그니처

type CountryCodes = {
    [key : string] : string
}

let countryCodes : CountryCodes = {
    Korea : "ko",
    UnitedState : 'us',
    UnitedKingdom : 'uk'
}

type CountryNumberCodes = {
    [key : string] : number
}

let countryNumberCodes : CountryNumberCodes = {
    Korea : 410,
    UnitedState : 840,
    UnitedKingdom : 826
}