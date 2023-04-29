---
title: Apuntes de Node / Express
description: "Apuntes de Node / Express"
date: 2023-04-29T12:33:23.615Z
preview: ""
draft: true
tags: [Node, Express, Apuntes]
categories: []
---

##Estructura básica de un servidor en Node

Ejemplo de estructura básica de un servidor en Node: se crea el servidor y se le pasa una callback function (requestHandler en este caso) que va a manejar los pedidos y respuestas del servidor. Se le va a pasar un objeto request (req) en el que llega la información del pedido, y otro response (res) en el que va la respuesta. En este ejemplo además se procesa la request para hacer un routing.

```JavaScript
import { createServer } from "http";

function requestHandler(req, res) {
  console.log("In comes a request to: ", req.url);

  if (req.url === "/") {
    res.end("Welcome to the homepage!");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page!");
  } else {
    res.end("Error! File not found.");
  }
}

const server = createServer(requestHandler);
server.listen(3000);
```

## Estructura básica de un servidor en Express
Ejemplo básico de servidor en Express (sin routing).
```JavaScript
import express from "express";
import { createServer } from "http";
const app = express();

app.use(function (request, response) {
  console.log("In comes a request to: " + request.url);
  response.end("Hello, world!");
});
createServer(app).listen(3000);
```

## Servidor en Express con middleware
Podría procesarse todo en una sola función como en ejemplo básico de (vanilla) Node, pero Express permite procesar todo mediante un array de funciones intermediarias para estructurar mejor el código. En este ejemplo se divide la respuesta de una función que se ocupa del logging.

```JavaScript
import express from "express";
import { createServer } from "http";

const app = express();

// middleware para logging
app.use(function (request, response, next) {
  console.log("In comes a " + request.method + " to " + request.url);
  next();
});

//respuesta
app.use(function (request, response) {
  response.writeHead(200, { "Content-Type": "text/plain" });
  response.end("Hello, world!");
});
createServer(app).listen(3000);
```