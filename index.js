/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**
 * This sample demonstrates a simple skill built with the Amazon Alexa Skills
 * nodejs skill development kit.
 * This sample supports multiple lauguages. (en-US, en-GB, de-DE).
 * The Intent Schema, Custom Slots and Sample Utterances for this skill, as well
 * as testing instructions are located at https://github.com/alexa/skill-sample-nodejs-fact
 **/

'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention.
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'African Proverbs';
const GET_FACT_MESSAGE = "Here's your proverb: ";
const HELP_MESSAGE = 'You can say tell me an african proverb, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

//=========================================================================================================================================
//TODO: Replace this data with your own.  You can find translations of this data at http://github.com/alexa/skill-sample-node-js-fact/data
//=========================================================================================================================================
const data = [
    'N single hand, regardless of its might, can lift and place a calabash on the head.',
    'The hand of a child cannot reach the shelf, that of an elder cannot enter a gourd.',
    'Twenty children will not play together for twenty years',
    'No wise man can initiate himself into the ifa cult, No expert can confer nobility on himself. The sharpest of knives cannot carve its own handle.',
    'A dog with someone behind it can kill a monkey; The one without anybody behind it will kill nothing; And the monkey with some one behind it can kill a whole man.',
    'The marsh stands aloof; Acting as if it were not the rivers kin.',
    'One cannot be fit enough to live with a person, and not be fit enough to criticize that person.',
    'It frightens like the lack of money; And the lack of money is the lord of all frights.',
    'He who is old and penniless is considered unwise, It is the rich man who leads the settlement.',
    'If you run out of money, your first insults will come from those to whom you gave.',
    'A sated dog does not play with a hungry one.',
    'The insect that devours the cabbage is justified , there must be a limit to the beauty of a plant.',
    'He who marries beauty marries trouble.',
];

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const factArr = data;
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
