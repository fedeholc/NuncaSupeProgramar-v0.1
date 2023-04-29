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

El código que está debajo es un ejemplo de estructura básica de un servidor en Node. Se crear el servidor y se le pasa una callback function (requestHandler en este caso) que va a manejar los pedidos y respuestas del servidor. Se le va a pasar un objeto request (req) en el que llega la información del pedido, y otro response (res) en el que va la respuesta.

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

let server = createServer(requestHandler);
server.listen(3000);
```
