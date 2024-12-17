/**
 *  Класс для связи с сервером.
 *  Содержит методы для отправки запросов на сервер и получения ответов
 * */
export default class TicketService {
    async list(callback) {
      const response = await fetch(
        `https://ahj-homeworks-http-help-desk-backend.vercel.app/?method=allTickets`,
      );
  
      if (response.ok) {
        try {
          callback(await response.json());
        } catch (error) {
          console.error(error);
        }
      }
    }
  
    async get(id, callback) {
      const response = await fetch(
        `https://ahj-homeworks-http-help-desk-backend.vercel.app/?method=ticketById&id=${id}`,
      );
  
      if (response.ok) {
        try {
          callback(await response.json());
        } catch (error) {
          console.error(error);
        }
      }
    }
  
    async create(data, callback) {
      const response = await fetch(
        `https://ahj-homeworks-http-help-desk-backend.vercel.app/?method=createTicket`,
        {
          method: "POST",
          body: JSON.stringify(Object.fromEntries(data)),
        },
      );
  
      if (response.ok) {
        try {
          callback(await response.json());
        } catch (error) {
          console.error(error);
        }
      }
    }
  
    async update(id, data, callback) {
      let list = data;
  
      if (list instanceof FormData) {
        list = Object.fromEntries(list);
      }
      const response = await fetch(
        `https://ahj-homeworks-http-help-desk-backend.vercel.app/?method=updateById&id=${id}`,
        {
          method: "POST",
          body: JSON.stringify(list),
        },
      );
  
      if (response.ok) {
        try {
          callback(await response.json());
        } catch (e) {
          console.error(e);
        }
      }
    }
  
    async delete(id, callback) {
      const response = await fetch(
        `https://ahj-homeworks-http-help-desk-backend.vercel.app/?method=deleteById&id=${id}`,
      );
  
      if (response.ok) {
        try {
          callback();
        } catch (error) {
          console.error(error);
        }
      }
    }
  }