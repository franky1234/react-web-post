import React from 'react';

const selectedPost = (stateParent, { target }) => stateParent(target.id);

const SuggestionsComponent = ({ suggestions, changeStateParent }) => {
  return (
    <div>
      {suggestions.map(sugestion =>
        <div className="ui segment" id={sugestion.id} key={sugestion.id} onClick={selectedPost.bind({}, changeStateParent)} >
          {sugestion.title}
        </div>
      )}
    </div>
  );
}

export default SuggestionsComponent;