# Dockerize-django-boilerplate

This is a Django project template dockerized and integrated with React Library and PostgreSQL, simple starter ready to deployment phase

# Requirements:

- Docker Destkop (For Windows and Mac OS) or Docker Engine / Docker Compose (for linux distros)
- Pipenv (For Development)
- Nodejs and npm (For Development)



# Running project :

1. Clone the repo
2. Build and mount the docker container : " sudo docker-compose up -d --build "
3. Open navigator to the web page : http://localhost:8000



# Development :

- Installing node modules using the commande [" npm install "]
- Execute the jsx watcher command using npm [" npm run jsx-watch "] and change in the static src folder for react development
- You can made changes in backend source code after building + mounting the docker container



# Deployment :

- Before deploying, build the project static files in the same time where the docker container is mounted using the command 
  [" sudo docker-compose exec web python manage.py collectstatic "]
  
  
  
# Live Demo : 

- On Heroku: https://serene-inlet-77351.herokuapp.com/



# Contributing :

- Any pull request will be well recieved and well analysed for the goal of making this project much better
- Any issue / bug / feature, you can put it with the issues



Thank you for your support, I wish this project to be a starter for every developper.

