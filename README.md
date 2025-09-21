Instalación de Celestia Node

Ejecuta el script oficial para instalar la versión v0.21.9-mammoth-v0.0.17:

bash -c "$(curl -sL https://docs.celestia.org/celestia-node.sh)" -- -v v0.21.9-mammoth-v0.0.17


Esto descargará e instalará el binario celestia.

🗄️ Inicializar el nodo (crear base de datos)

Antes de arrancar el nodo, debes inicializar la base de datos local:

celestia light init --p2p.network mammoth


Esto creará los directorios de configuración y almacenamiento en:

~/.celestia-light-mammoth

▶️ Iniciar el nodo Light

Ejecuta el nodo conectándolo al core endpoint global:

celestia light start \
  --p2p.network mammoth \
  --core.ip global.grpc.mamochain.com \
  --core.port 9090 \
  --rpc.skip-auth

✅ Verificar que funciona

En otra terminal, prueba que el nodo responde:

curl http://localhost:26658/status


Si todo está bien, verás información del nodo sincronizado en la red Mammoth.

# segundo repositorio :
(https://github.com/Estemen123/HacktonCochablock)
# contrato de token:
https://eth-sepolia.blockscout.com/address/0x318bfE4910Bd7d2554F7354c1311E924B36B6A1e?tab=read_write_contract

https://github.com/j3tjet/civecoin

# Instalar dependencias del proyecto en ambos repositorios
npm i