pipeline {
    agent any 
    stages {
        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/NIBI23/ci-cd-01.git'
            }
        }
        stage( "unit test") {
            steps {
                sh 'npm install'
		sh 'npm test'
            }
        }
    }
}

