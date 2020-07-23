import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1595523637116 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // criando a extensão do 'uuid' caso ele não esteja habilitado no Postgres
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    
    // criando a tabela
    await queryRunner.createTable(new Table({
      // nome da tabela
      name: 'users',
      // colunas da tabela
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true,
          // estratégia usada para gerar o id
          generationStrategy: 'uuid',
          // através do 'uuid_generate_v4()' iremos gerar os valores únicos dos id's
          default: 'uuid_generate_v4()'      
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true
        },
        {
          name: 'password',
          type: 'varchar'
        }
      ],
    }))   
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // tudo que foi feito no método 'up()' deverá ser desfeito no método 'down()'
    await queryRunner.dropTable('users')
    // deletando/dropando a extensão do 'uuid'
    await queryRunner.query('DROP EXTENSION "uuid-ossp"')
  }
}
