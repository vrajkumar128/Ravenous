const apiKey = '8e9E3zKIOp2048ST7IH_MwOrprnN10KzVHAHV750T9tpjIrnE8i2TubOpZX3EoJa0E6ugF7fq9d7njSsmDarM-ge524-VKeigvNy08ZqHdavQNyh7leHciPXhOfWWnYx';

export const Yelp = {
  async search(term, location, sortBy) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        headers: {
          Authorization: `Bearer ${apiKey}`
        }
      });
      if (response.ok) {
        let jsonResponse = await response.json();
        return jsonResponse.businesses.map(business => ({
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count
        }));
      } else {
        throw new Error('Request Failed!');
      }
    } catch (error) {
      console.log(error);
    }
  }
}
