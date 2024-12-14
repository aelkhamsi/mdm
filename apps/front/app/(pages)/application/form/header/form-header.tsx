import { Button } from '@mdm/ui'
import { EventHandler, MouseEvent } from 'react'

const FormHeader = ({
  onSave
}:{
  onSave: EventHandler<MouseEvent>,
}) => {
  return ( 
    <div className="flex justify-between">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Candidature</h2>
        <div className="text-muted-foreground">
          Suivez les étapes ci-dessous pour compléter votre candidature
        </div>
      </div>

      <div>
        <Button onClick={onSave}>Sauvegarder & Terminer plus tard</Button>
      </div>
    </div>
  )
}

export default FormHeader
