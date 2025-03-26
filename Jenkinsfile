pipeline {
    agent any
    environment {
        GIT_CREDENTIALS = credentials('github-token')
    }
    stages {
        stage('Checkout') {
            steps {
                script {
                    git credentialsId: 'github-token', url: 'https://github.com/GSreevadhani/Personal-Portfolio.git', branch: 'main'
                }
            }
        }
        stage('Build and Push Docker Image') {
            steps {
                script {
                    sh 'chmod +x deploy.sh'
                    sh './deploy.sh'
                }
            }
        }
    }
}
