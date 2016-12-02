import { Meteor } from 'meteor/meteor';

const sleep = async () =>
  new Promise((resolve) => {
    setTimeout(resolve, 500)
  });

const C = new Mongo.Collection('c');

Meteor.startup(async () => {
  console.log('Start of async');
  await sleep();
  console.log('Slept');
  try {
    console.log(C.find().count())
  } catch (e) {
    console.error(e);
  }
});
