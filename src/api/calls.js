import {API_PATHS} from './const';

export function apiCall(call){

    return fetch(call)
}

export function CountryApi(country){
     const countryCall = API_PATHS.country+country
     return fetch(countryCall);
}   

export function CountryDeaths(country) {
    const CountryDeathsCall = API_PATHS.country+country+'/deaths'
    return fetch(CountryDeathsCall);
}

export function CountryRecover(country) {
    const CountryDeathsCall = API_PATHS.country+country+'/recover'
    return fetch(CountryDeathsCall);
}
export function CountryConfirmed(country) {
    const CountryConfirmedCall = API_PATHS.country+country+'/confirmed'
    return fetch(CountryConfirmedCall);
}