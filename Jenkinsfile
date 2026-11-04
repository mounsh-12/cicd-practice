pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                echo 'Checking application source code'
            }
        }

        stage('Build') {
            steps {
                echo 'Building application'
            }
        }

        stage('Test') {
            steps {
                echo 'Running automated tests'
            }
        }

        stage('Trivy Security Scan') {
            steps {
                sh '''
                    trivy image \
                    --severity HIGH,CRITICAL \
                    mounish10/cicd-practice:day201
                '''
            }
        }

        stage('Security Gate') {
            steps {
                sh '''
                    trivy image \
                    --severity HIGH,CRITICAL \
                    --exit-code 1 \
                    mounish10/cicd-practice:day201
                '''
            }
        }

        stage('Deployment') {
            steps {
                echo 'Deployment allowed if security gate passes'
            }
        }
    }
}