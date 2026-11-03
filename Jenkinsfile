pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Jenkins has started the pipeline.'
                echo 'Source code will be checked out from GitHub.'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the CI/CD practice application.'
            }
        }

        stage('Test') {
            steps {
                echo 'Running application tests.'
            }
        }

        stage('Docker') {
            steps {
                echo 'Preparing Docker image build.'
            }
        }
    }
}