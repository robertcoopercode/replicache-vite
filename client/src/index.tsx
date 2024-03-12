import {nanoid} from 'nanoid';
import React, {useCallback, useEffect, useState} from 'react';
import ReactDOM from 'react-dom/client';
import {Replicache} from 'replicache';
import Todo from 'routes/todo/todo';
import './index.css';
import {M, mutators} from './mutators';
import {RouterProvider} from "react-router-dom";
import {router} from "routes/router";

async function init() {
  ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>,
  );
}

await init();
