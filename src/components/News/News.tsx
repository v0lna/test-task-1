import React from 'react';

interface Props {}

export const News: React.FC<Props> = () => {
  return (
    <div>
      <h1>Title of news</h1>
      <h2>Author: Kodak Black</h2>
      <span>Created at 19.11.2019 23:40</span>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, libero tenetur laboriosam
        minima optio dolore eos mollitia tempora quibusdam architecto, reprehenderit expedita enim
        exercitationem iste ipsam cumque impedit nulla quod.
      </p>
    </div>
  );
};
