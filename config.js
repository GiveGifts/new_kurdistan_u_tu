name: Build and Deploy

on:
  push:
    branches:
      - main

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout repository
        uses: actions/checkout@v2

      - name: Generate Config File
        run: |
          echo "window.config = { apiKey: '${{ secrets.API_KEY }}' };" > config.js

  deploy:
    needs: build
    runs-on: ubuntu-latest

    steps:
      - name: Deploy to Hosting Service
        # Add your deployment steps here