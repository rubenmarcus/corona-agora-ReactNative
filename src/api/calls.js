import {API_CALLS} from './const';

export function apiCall(call){

    return fetch(call)
}

export function CountryApi(country){
     const countryCall = APICALLS.country+country
     return fetch(countryCall);
}   

export function CountryDeaths(country) {
    const CountryDeathsCall = APICALLS.country+country+'/deaths'
    return fetch(CountryDeathsCall);
}

export function CountryRecover(country) {
    const CountryDeathsCall = APICALLS.country+country+'/recover'
    return fetch(CountryDeathsCall);
}
export function CountryConfirmed(country) {
    const CountryConfirmedCall = APICALLS.country+country+'/confirmed'
    return fetch(CountryConfirmed);
}