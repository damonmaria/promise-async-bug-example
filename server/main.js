import { Meteor } from 'meteor/meteor';

const sleep = async () =>
  new Promise((resolve) => {
    // Meteor.setTimeout(resolve, 500)  // makes no difference
    setTimeout(resolve, 500)
  });

const C = new Mongo.Collection('c');

Meteor.startup(async () => {
  console.log('Start of async');
  await sleep();  // Removing this stops the error happening
  console.log('Slept');
  try {
    console.log(C.find().count())
  } catch (e) {
    console.error(e);
  }
});
