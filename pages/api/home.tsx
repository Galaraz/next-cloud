import type { NextRequest } from 'next/server'
import {apiId } from '../../utils';

export const config = {
  runtime: 'experimental-edge',
}

export default async function (req: NextRequest) {
  

     
    const response =  await fetch(
      "https://pokeapi.co/api/v2/pokemon",
        {
          method: 'GET',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
         
        }
    
    );
    const list = await response.json()
  
    return new Response (JSON.stringify(list)) 
}