# Inteli - Instituto de Tecnologia e Liderança 

<p align="center">
<a href= "https://www.inteli.edu.br/"><img src="assets/inteli.png" alt="Inteli - Instituto de Tecnologia e Liderança" border="0" width=40% height=40%></a>
</p>

<br>

# ETA

## Etanóis

## 👨‍🎓 Integrantes: 
- <a href="https://www.linkedin.com/in/eduardosbarreto/">Eduardo Santos Barreto</a>
- <a href="https://www.linkedin.com/in/gustavo-gouveia-583185271/">Gustavo Gouveia</a>
- <a href="https://www.linkedin.com/in/isabelle-santos-507067204/">Isabelle da Silva Santos</a> 
- <a href="https://www.linkedin.com/in/rafaelarojas/">Rafaela Cristina Rojas Lemos</a> 
- <a href="https://www.linkedin.com/in/rafael-coutinho2004/">Rafael Cauã Coutinho</a>
- <a href="https://www.linkedin.com/in/raul-rezende-szpak-642079186/">Raul Rezende Szpak</a> 

## 👩‍🏫 Professores:
### Orientador(a) 
- <a href="https://www.linkedin.com/in/marcelo-gon%C3%A7alves-phd-a550652/">Marcelo Gonçalves</a>
### Instrutores
- <a href="https://www.linkedin.com/in/andreluizbraga/">André Luiz Braga</a>
- <a href="https://www.linkedin.com/in/bruna-mayer-00a556174">Bruna Mayer</a>
- <a href="https://www.linkedin.com/in/claudio-andr%C3%A9-64911a1b5/">Claudio André</a>
- <a href="https://www.linkedin.com/in/cristiano-benites-687647a8/">Cristiano da Silva Benites</a>
- <a href="https://www.linkedin.com/in/fatima-toledo/">Fatima Toledo</a> 
- <a href="https://www.linkedin.com/in/henrique-mohallem-paiva-6854b460/">Henrique Mohallem Paiva</a> 
- <a href="https://www.linkedin.com/in/juliastateri/">Julia Stateri</a>
- <a href="https://www.linkedin.com/in/laizaribeiro/">Laíza Ribeiro</a>
- <a href="https://www.linkedin.com/in/sergio-venancio-a509b342/">Sérgio Venancio</a>

## 📜 Descrição

Projeto de Rastreamento e Gestão de Ativos para a Atvos

A Atvos, uma das principais empresas do setor sucroenergético no Brasil, enfrenta desafios significativos na gestão de seus ativos e equipamentos distribuídos em extensas áreas agrícolas. Com uma operação complexa, que envolve a produção de açúcar, etanol e bioenergia, é crucial para a Atvos garantir a eficiência operacional, o rastreamento preciso de ativos e a manutenção adequada de equipamentos. O cenário agrícola vasto e dinâmico apresenta obstáculos únicos, como a necessidade de monitorar a localização de máquinas, insumos e equipamentos em tempo real, garantindo uma resposta rápida a eventos imprevistos e otimizando processos logísticos.

Escopo do Projeto:

O projeto proposto visa criar uma solução abrangente de rastreamento e gestão de ativos para a Atvos. A solução integrará tecnologias avançadas, como sensores RFID, microcontroladores ESP32, comunicação sem fio e uma plataforma web robusta para fornecer uma visão completa do status e localização de ativos em tempo real. O escopo abrange:

1. **Implantação de Etiquetas RFID:** Cada ativo, de máquinas a insumos, receberá etiquetas RFID para identificação única e captura de dados.

2. **Sensor RFID e Comunicação sem Fio:** Leitores RFID integrados a máquinas e pontos estratégicos, com comunicação sem fio via IEEE 802.11 para transmissão eficaz dos dados para a nuvem.

3. **Microcontrolador ESP32:** Atuando como o cérebro do sistema, o ESP32 interpretará dados dos sensores RFID, gerenciará a comunicação sem fio e permitirá interações com outros dispositivos.

4. **Plataforma Web ETA:** Desenvolvida com React e Express, a plataforma oferecerá uma interface dinâmica para acesso a informações em tempo real sobre a localização, status e histórico de cada ativo.

**Proposta de Solução:**

A solução revolucionará a gestão de ativos na Atvos, proporcionando uma visão holística e em tempo real da operação agrícola. Integrando etiquetas RFID, sensores avançados, microcontroladores e uma plataforma web intuitiva, a empresa poderá:

- **Rastrear Ativos em Tempo Real:** Monitorar a localização precisa de máquinas, equipamentos e insumos em tempo real para respostas rápidas a eventos não planejados, otimização de rotas e redução de tempo de inatividade.

- **Otimizar Processos Logísticos:** Insights valiosos para otimizar processos logísticos, identificando gargalos, aprimorando fluxos de trabalho e reduzindo custos operacionais.

- **Geração de Relatórios Detalhados:** Facilitar a tomada de decisões estratégicas com relatórios detalhados sobre o histórico de movimentação de ativos, manutenção e outros parâmetros essenciais.

- **Alertas em Tempo Real:** Emissão de alertas para eventos críticos, como entrada/saída não autorizada de ativos, manutenção necessária e situações de emergência.

**Parte Técnica da Proposta:**

1. **Etiquetas RFID e Leitores:** Utilização de etiquetas RFID passivas de longo alcance em cada ativo, com leitores posicionados estrategicamente.

2. **Microcontrolador ESP32:** Programação do ESP32 para interpretar dados dos sensores RFID, gerenciar comunicação sem fio via IEEE 802.11 e garantir transmissão segura dos dados.

3. **Comunicação Sem Fio:** Estabelecimento de comunicação sem fio usando o protocolo IEEE 802.11 para transmissão eficiente e confiável dos dados para a plataforma web.

4. **Plataforma Web ETA:** Desenvolvimento da plataforma com React no frontend para uma interface dinâmica, e Express no backend para processamento eficiente de solicitações. O banco de dados PostgreSQL armazenará dados de maneira segura e eficiente.

Ao implementar essa solução inovadora, a Atvos estará equipada para enfrentar os desafios da gestão de ativos em seu ambiente agrícola complexo, promovendo eficiência operacional e crescimento sustentável.

Vídeo de demonstração do funcionamento do projeto ETA: [Protótipo ETA](https://www.youtube.com/watch?v=0m1yJ46KjWE)

## 📁 Estrutura de pastas

Dentre os arquivos e pastas presentes na raiz do projeto, definem-se:

```
└── assets
└── documents
│   ├── outros
│   |   ├── assets
|   |   |   ├── gif
|   |   |   ├── images
|   |   |   ├── videos
└── src
│   ├── backend
|   |   ├── config
|   |   ├── src
|   |   |   ├── controllers
|   |   |   ├── models
|   |   |   ├── routes
│   ├── firmware
|   |   ├── include
|   |   |   ├── cfg
|   |   |   ├── controller
|   |   |   ├── hal
|   |   |   ├── proxy
|   |   |   ├── service
|   |   |   ├── utils
|   |   ├── src
|   |   |   ├── cfg
|   |   |   ├── controller
|   |   |   ├── hal
|   |   |   ├── proxy
|   |   |   ├── service
│   ├── frontend
│       ├── public
│       ├── src
│       │   ├── assets
│       │   ├── components
│       │   ├── pages
└── documentos
│   └── outros
│       │   └── assets
│       │   │   ├── imagens
```

- <b>assets</b>: aqui estão os arquivos relacionados a parte gráfica do projeto, ou seja, as imagens e vídeos que os representam.

- <b>document</b>: aqui estão todos os documentos do projeto, incluindo o manual de instruções. Há também uma pasta denominada <b>outros</b> onde estão presentes outros documentos complementares.

- <b>src</b>: Todo o código fonte criado para o desenvolvimento do projeto, incluindo firmware, notebooks, backend e frontend, se aplicáveis.

- <b>README.md</b>: arquivo que serve como guia e explicação geral sobre o projeto.

## 🔧 Instalação

Siga passo a passo para inciar o backend:

- Abra o repositório em seu dispositivo e em seguida abra o terminal.
- Digite ```cd src/backend``` para entrar na pasta referente.
- Digite ```npm i``` para instalar todas dependências.
- Por fim, digite ```npm start``` para inicializar o sistema.

Siga passo a passo para inciar o frontend:

- Abra o repositório em seu dispositivo e em seguida abra o terminal.
- Digite ```cd src/frontend``` para entrar na pasta referente.
- Digite ```yarn install``` para instalar todas dependências.
- Por fim, digite ```yarn dev``` para inicializar o sistema.

Para mais informações sobre instalação e montagem do projeto, o manual de instrução do projeto ETA pode ser encontrado [aqui](https://drive.google.com/file/d/1OZvzbSjfnSuV79Hb8ErBE-oGOZ2sLp0c/view?usp=sharing)



## 🗃 Histórico de lançamentos

* 0.5.0 - 21/12/2023
    * Back-end com *Express* e front-end com *React*, ambos integrados com o físico
    * *Case* 3D para o protótipo
* 0.4.0 - 08/12/2023
    * Inicio do back-end com *Express*
    * Diagrama de tecnologias
    * Diagrama de UML
    * Manual de instrução
    * Aprimoramento do protótipo
    * Arquitetura refinada da solução
* 0.3.0 - 24/11/2023
    * Diagrama da arquitetura do projeto
    * Protótipo com HTTP/2 e SPI
* 0.2.0 - 10/11/2023
    * Protótipo do sistema *Web*
    * Aprimoramnto do protótipo inicial e realização de testes
    * Protótipo para cadastro de peças no almoxarifado
* 0.1.0 - 27/10/2023
    * Protótipo inicial do projeto utilizando *leds* e sensor RFID
    * Documentação de negócios, requisitos funcionais e *User Experience*

## 📋 Licença/License
Etanois by Inteli, [Eduardo Santos Barreto](https://www.linkedin.com/in/eduardosbarreto/), [Gustavo Gouveia](https://www.linkedin.com/in/gustavo-gouveia-583185271/), [Isabelle da Silva Santos](https://www.linkedin.com/in/isabelle-santos-507067204/), [Rafaela Cristina Rojas Lemos](https://www.linkedin.com/in/rafaelarojas/), [Rafael Cauã Coutinho](https://www.linkedin.com/in/rafel-coutinho2004/) and [Raul Rezende Szpak](https://www.linkedin.com/in/raul-rezende-szpak-642079186/) is licensed under Attribution 4.0 International.


