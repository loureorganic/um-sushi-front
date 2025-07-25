import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import HomePage from '@/app/page'
import * as api from '@/app/services/api'
import { Product } from '@/app/models/product'

// Mock API response
const mockProducts: Product[] = [
    {
        id: 1,
        name: 'Sushi de Salmão',
        price: 10,
        image: '/sushi-salmao.jpg',
        description: ''
    },
    {
        id: 2,
        name: 'Sashimi de Atum',
        price: 12,
        image: '/sashimi-atum.jpg',
        description: ''
    },
    {
        id: 3,
        name: 'Temaki Califórnia',
        price: 15,
        image: '/temaki.jpg',
        description: ''
    }
]

describe('HomePage search filter', () => {
    beforeEach(() => {
        vi.spyOn(api, 'fetchMenu').mockResolvedValue(mockProducts)
    })

    it('deve exibir todos os produtos inicialmente', async () => {
        render(<HomePage />)
        for (const product of mockProducts) {
            await waitFor(() => expect(screen.getByText(product.name)).toBeInTheDocument())
        }
    })

    it('deve filtrar produtos com base no termo digitado', async () => {
        render(<HomePage />)

        const input = await screen.findByPlaceholderText(/buscar produto/i)
        fireEvent.change(input, { target: { value: 'salmão' } })

        expect(await screen.findByText('Sushi de Salmão')).toBeInTheDocument()
        expect(screen.queryByText('Sashimi de Atum')).not.toBeInTheDocument()
        expect(screen.queryByText('Temaki Califórnia')).not.toBeInTheDocument()
    })

    it('deve mostrar nenhum produto se o termo não corresponder a nada', async () => {
        render(<HomePage />)

        const input = await screen.findByPlaceholderText(/buscar produto/i)
        fireEvent.change(input, { target: { value: 'pizza' } })

        await waitFor(() => {
            expect(screen.queryByText('Sushi de Salmão')).not.toBeInTheDocument()
            expect(screen.queryByText('Sashimi de Atum')).not.toBeInTheDocument()
            expect(screen.queryByText('Temaki Califórnia')).not.toBeInTheDocument()
        })

        expect(screen.queryByText(/carregando/i)).not.toBeInTheDocument()
    })

    it('deve restaurar a lista de produtos ao limpar a busca', async () => {
        render(<HomePage />)

        const input = await screen.findByPlaceholderText(/buscar produto/i)
        fireEvent.change(input, { target: { value: 'salmão' } })
        expect(await screen.findByText('Sushi de Salmão')).toBeInTheDocument()

        fireEvent.change(input, { target: { value: '' } })
        expect(await screen.findByText('Temaki Califórnia')).toBeInTheDocument()
        expect(await screen.findByText('Sashimi de Atum')).toBeInTheDocument()
    })
})
