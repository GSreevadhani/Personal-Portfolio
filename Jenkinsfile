pipeline { 
    agent any  
    
    environment {
        DOCKER_USERNAME = credentials('docker-hub-username')
        DOCKER_PASSWORD = credentials('docker-hub-password')
    }

    stages { 
        stage('Build and Push Docker Image') { 
            steps { 
                script {
                    // Grant execute permissions to deploy.sh
                    sh 'chmod +x deploy.sh'  

                    // Run deployment script
                    sh './deploy.sh'  
                }
            } 
        } 
    } 
}
