import { v4 as uuidv4 } from "uuid"; // need to import "uuid" library to generate unique ID for each day entry

//class to generate time slots for doc1 (Alina Salomie)
export class doc1SlotGenerator {
  constructor() {
      this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
      this.timeSlots = ['10-11', '11-12', '12-13', '14:30-15:30', '15:30-16:30'];
      this.timeSlotsData = this.generateTimeSlots();
  }

  //generates an array of time slots for the next two months
  generateTimeSlots() {
      const timeSlotsArr = [];
      const startDate = new Date(); // start from today
      const endDate = new Date();
      endDate.setMonth(startDate.getMonth() + 2); // end date is 2 months from today

      //iterate over each day from start date to end date
      for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
          if (this.workingDays.includes(i.toLocaleString('en-US', { weekday: 'long' }))) {
              const dateStr = i.toLocaleDateString('en-GB'); // Format date as 'dd/mm/yyyy'
              const slots = this.timeSlots.map(slot => ({time: slot, available: true})); //create available time slots for the day
              timeSlotsArr.push({ id: uuidv4(), date: dateStr, slots: slots }); //add to the array with a unique id
          }
      }
      return timeSlotsArr;
  }
}

//same comments apply for below 
export class doc2SlotGenerator {
    constructor() {
        this.workingDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        this.timeSlots = ['10-11', '11-12', '12-13', '14:30-15:30', '15:30-16:30'];
        this.timeSlotsData = this.generateTimeSlots();
    }
  
    generateTimeSlots() {
        const timeSlotsArr = [];
        const startDate = new Date(); // start from today, 13.05
        const endDate = new Date();
        endDate.setMonth(startDate.getMonth() + 2); // end date is 2 months from today
  
        for (let i = startDate; i <= endDate; i.setDate(i.getDate() + 1)) {
            if (this.workingDays.includes(i.toLocaleString('en-US', { weekday: 'long' }))) {
                const dateStr = i.toLocaleDateString('en-GB');
                const slots = this.timeSlots.map(slot => ({time: slot, available: true}));
                timeSlotsArr.push({ id: uuidv4(), date: dateStr, slots: slots });
            }
        }
        return timeSlotsArr;
    }
  }

