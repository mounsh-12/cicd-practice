
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                echo 'Source code checkout completed'
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

        stage('Trivy Security Gate') {
            steps {
                sh '''
                    trivy image \
                    --platform linux/arm64 \
                    --severity HIGH,CRITICAL \
                    --exit-code 1 \
                    mounish10/cicd-practice:day203-secure
                '''
            }
        }

        stage('Deployment') {
            steps {
                echo 'Security scan passed. Deployment can proceed.'
            }
        }
    }
}
