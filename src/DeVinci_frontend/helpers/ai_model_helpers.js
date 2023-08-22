const availableAiModels = [
  {
    id: 'RedPajama-INCITE-Chat-3B-v1-q4f32_0',
    name: 'Red Pajama',
    size: 'Medium',
    numberOfParameters: '3 billion',
    performance: 'Alright',
    default: true
  },
  {
    id: 'Llama-2-7b-chat-hf-q4f32_1',
    name: 'Llama2',
    size: 'Large',
    numberOfParameters: '7 billion',
    performance: 'Very Good',
    default: false
  },
  {
    id: 'vicuna-v1-7b-q4f32_0',
    name: 'Vicuna',
    size: 'Large',
    numberOfParameters: '7 billion',
    performance: 'Good',
    default: false
  },
];

export const getAvailableAiModels = () => {
  return availableAiModels;
};

export const getDefaultAiModelId = () => {
  return availableAiModels.find(model => model.default).id;
};

// Named event listener function such that it will only be attached once (anonymous event listeners may be attached mulitple times, so in casu each time initiateCollapsibles is called which messes up the functionality)
const addCollapsibleFunctionality = (event) => {
  event.target.classList.toggle('active-app-button');
  var content = event.target.nextElementSibling;
  if (content.style.display === 'block') {
    content.style.display = 'none';
  } else {
    content.style.display = 'block';
  };
};

export const initiateCollapsibles = () => {
  var coll = document.getElementsByClassName('space-details-collapsible');
  var i;
  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener('click', addCollapsibleFunctionality);
  };
};
