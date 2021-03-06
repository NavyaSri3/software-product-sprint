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
 * Fetches a json object from the server and adds it to the DOM.
 */

function getJsonObject() {
  console.log('Fetching the Json object.');

  // The fetch() function returns a Promise because the request is asynchronous.
  const responsePromise = fetch('/data');

  // When the request is complete, pass the response into handleResponse().
  responsePromise.then(handleResponse);
}

/**
 * Handles response by converting it to text and passing the result to
 * addQuoteToDom().
 */
function handleResponse(response) {
  console.log('Handling the response.');

  // response.text() returns a Promise, because the response is a stream of
  // content and not a simple variable.
  const JsonPromise = response.json();

  // When the response is converted to text, pass the result into the
  // addQuoteToDom() function.
  JsonPromise.then(addGreetingToDom);
}

/** Adds a greeting message to the DOM. */
function addGreetingToDom(commentJson) {
  console.log('Adding quote to dom: ' + commentJson);

  const commentContainer = document.getElementById('comment-container');
  commentContainer.innerHTML = '';
  for (var key in commentJson) {
    if (commentJson.hasOwnProperty(key)) {
        var val = commentJson[key];
        commentContainer.appendChild(
        createListElement(''+key+':' + val));
        console.log(val);
  }
}
  
}

/** Creates a list node with passed text  */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
