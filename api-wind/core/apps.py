from django.apps import AppConfig

class CoreConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'apps.core'
    verbose_name = 'Core'

    def ready(self):
        # Aqui você pode importar signals ou fazer inicializações
        # Exemplo: import apps.core.signals  # noqa (se criar signals depois)
        pass