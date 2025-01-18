export const getAllCities = (countries) => {
    const citiesAndCountry = countries.flatMap((country) =>
        country.cities.map((city) => `${city}`)
    );

    return citiesAndCountry;
}