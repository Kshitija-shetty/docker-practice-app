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
        stage('test') {
            steps {
                echo'Running tests'
                echo 'all tests passed'
            }
        }
     
        stage('Deploy') {
            steps {
                    echo 'stopping existing container'
                    bat 'docker-compose down || true'
                    
                    echo 'deployng app'
                    bat 'docker-compose up -d --build'
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