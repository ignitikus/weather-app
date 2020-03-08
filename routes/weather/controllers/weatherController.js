const User = require('../../users/models/User')
const axios = require('axios')
const cities = require('../../../lib/cities')

module.exports ={

   getMainWeather: async(req,res) => {
      try {
         const coordinates = await cities.filter(({name})=> name.includes(req.user.homeCity))
         const response = await axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${coordinates[0].lat},${coordinates[0].lng}?units=us`)
         const dailyWeather = response.data.daily.data
         res.render('weather/weather', {dailyWeather, cities})
      } catch (error) {
         res.redirect('/')
      }
   },

   findCity: async(req,res) => {
      try {
         const coordinates = await cities.filter(({name})=> name.includes(req.query.city))
         const response = await axios.get(`https://api.darksky.net/forecast/${process.env.DARKSKY_KEY}/${coordinates[0].lat},${coordinates[0].lng}?units=us`)
         const dailyWeather = response.data.daily.data
         res.render('weather/city', {dailyWeather, cities, coordinates})
      } catch (error) {
         console.log(error)
         res.redirect('/')
      }
   }
   
   

}