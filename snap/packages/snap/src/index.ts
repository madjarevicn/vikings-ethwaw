import { OnRpcRequestHandler } from '@metamask/snap-types';

/**
 * Get a message from the origin. For demonstration purposes only.
 *
 * @param originString - The origin string.
 * @returns A message based on the origin.
 */
export const getMessage = (originString: string): string =>
  `Hello, ${originString}!`;

/**
 * Handle incoming JSON-RPC requests, sent through `wallet_invokeSnap`.
 *
 * @param args - The request handler args as object.
 * @param args.origin - The origin of the request, e.g., the website that
 * invoked the snap.
 * @param args.request - A validated JSON-RPC request object.
 * @returns `null` if the request succeeded.
 * @throws If the request method is not valid for this snap.
 * @throws If the `snap_confirm` call failed.
 */
export const onRpcRequest: OnRpcRequestHandler = async ({
  origin,
  request,
}) => {
  console.log({
    where: 'onRpcRequest',
    origin,
    request,
  });

  switch (request.method) {
    case 'hello':
      return wallet.request({
        method: 'snap_confirm',
        params: [
          {
            prompt: `Viking Details!`,
            description: 'Description',
            textAreaContent: `
TX Overview:

Protocol name: ${request.protocol_name}
Action: ${request.action}
Action description: ${request.action_description}
Topic: ${request.topic}
Input params: ${JSON.stringify(request.input_params)}
Input values: ${JSON.stringify(request.input_values)}

Contract Details:

Balance in USD: ${request.balance_usd}
Is verified: ${request.is_verified}
Name: ${request.name}
Public URL: ${request.public_url}
Transaction count: ${request.transaction_count}

Trust Score:

${request.value}% / 100%
${request.description}
            `,
          },
        ],
      });
    default:
      throw new Error('Method not found.');
  }
};
