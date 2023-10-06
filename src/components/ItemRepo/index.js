import React from 'react';

import { Divide, ItemContainer, Link, Remove } from './styles';

function ItemRepo({repo, handleRemoveRepo}) {

  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }

  return (
    <ItemContainer >
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <Link href={repo.html_url} rel="noreferrer" target="_blank">Ver repositório</Link>
        <Remove onClick={handleRemove} rel="noreferrer" className="remover">Remover</Remove>
        <Divide />
    </ItemContainer>
  )
}

export default ItemRepo;
