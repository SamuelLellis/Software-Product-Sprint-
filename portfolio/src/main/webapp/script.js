// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  const greetings = [
    'Never gonna give you up', 'Never gonna let you down',
    'Never gonna run around and desert you', 'Never gonna make you cry',
    'Never gonna say goodbye', 'Never gonna tell a lie and hurt you',
    'HAHAHA Rick ROll\'d. Be more careful next time ;)'
  ];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}

// Goes to /data URL and retrives Whatever is there
function fetchData() {
  console.assert('Retriving Data From /data');

  const responsePromise = fetch('/data');

  responsePromise.then(handleResponse);
}

function handleResponse(response) {
  console.log('Processing the response...');

  const textPromise = response.text();

  textPromise.then(addTextToDom);
}

function addTextToDom(text) {
  console.log('Adding the following Stirng to dom: ' + text);

  const textContainer = document.getElementById('greeting-container');
  textContainer.innerText = text;
}
