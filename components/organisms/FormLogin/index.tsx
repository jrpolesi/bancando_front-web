import {Input} from '../../atoms/Input';
import {Button} from '../../atoms/Button';

export function FormLogin(){
  return (
    <form>
      <p>Cadastre-se no nosso aplicativo</p>
      <Input name="input-name" label="Nome"></Input>
      <Input name="input-email" label="Email"></Input>
      <Button >Continue...</Button>
    </form>
  )
}