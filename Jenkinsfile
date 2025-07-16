pipeline {
    agent any
    
    tools {
        git 'Default'
    }
    environment {
        IMAGE_NAME = "docker-practice-app"
    }
    
    stages {
        stage('clone repo') {
            steps {
                git branch: 'main',
                url: 'https://github.com/Kshitija-shetty/docker-practice-app.git'
                
            }
        }
        stage('build docker image') {
            steps {
                  bat 'docker-compose build'
            }
        }
        stage('stop old containers') {
            steps {
                    bat 'docker-compose down || true'
                }
            
        }
        stage('run containers') {
            steps {
                    bat 'docker-compose up -d'
                }
            
        }
    }
    post {
        success {
            echo 'pipeline finished - containers up !!'
            bat 'docker-compose ps'
        }
        failure {
            echo 'pipeline failed'
        }
       
    }
}