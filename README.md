# Tutorial palestra Serverless Big Data

![](img/architecture.png)

1. Crie o bucket que receberá os dados. Para isso no console da AWS vá até o serviço S3 e clique em `Criar Bucket`
2. De um nome ao seu bucket e clique em `Criar Bucket`
   ![](img/s3-1.png)
3. Agora vamos criar o streaming do Kinesis, para isso vá até o serviço no console aws, clique em `Create data Stream`
   ![](img/kinesis1.png)
4. De o nome de 'teste' e o número '1' em shards como na imagem como na imagem e clique em `Create Kinesis stream`
   ![](img/kinesis2.png)
5. No seu terminal baixe o repositório git `git clone https://github.com/vamperst/demo-serverless-bigdata-talk.git`
6. Entre na pasta `demo-serverless-bigdata-talk/lambda`
7. Caso não tenha Serverless Framewaork baixe utilizando o comando `npm install -g serverless`
8. Agora vamos criar o Kinesis firehose. No menu lateral clique em `Data Firehose`. E após clique em `Create Delivery Stream`.
   ![](img/kinesis3.png)