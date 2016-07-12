import axios from 'axios';

export function getMenu() {
  return axios.get('https://json-data.herokuapp.com/restaurant/menu/1');
}

export function getSpecial(cb) {
  axios.get('https://json-data.herokuapp.com/restaurant/special/1')
    .then(function(resp) {
      var menuId = resp.data.menu_item_id;
      axios.get('https://json-data.herokuapp.com/restaurant/menu/1')
        .then(function(resp) {
          var special = resp.data.entrees.filter(function(entree) {
            return (entree.id === menuId);
          })[0];
          cb(special);
        })
    });
}

export function getBlog() {
  return axios.get('https://json-data.herokuapp.com/restaurant/news/1');
}

export function postReservation(data) {
  return axios.post('/reservations', data);
}

export default {
  getSpecial,
  getMenu,
  getBlog,
  postReservation
}
